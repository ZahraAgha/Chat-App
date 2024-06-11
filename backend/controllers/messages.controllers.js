import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'
import { getSocketId } from '../socket.js'
import { io } from '../socket.js'
export const getMessage = async (request, response) => {
    try {
        const { receiverId } = request.params
        const senderId = request.user._id
        const conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] }, }).
            populate("messages")
        if (!conversation || !conversation.messages || conversation.messages.length === 0) {
            return response.status(200).send([]);
        }
        const messages = conversation.messages
        response.status(200).send(messages)
    } catch (error) {
        console.log(`Error fetching messages`);
        response.status(500).send({ error: "Internal server error" });
        return;
    }
}

export const sendMessage = async (request, response) => {
    try {
        const { message } = request.body;
        const { receiverId } = request.params;
        const senderId = request.user._id

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = await Message.create({ senderId, receiverId, message })

        if (!newMessage) {
            response.status(500).send({ error: "Could not create message" })
        }

        conversation.messages.push(newMessage._id)

        await conversation.save()
        const socketId = getSocketId(receiverId)
        io.to(socketId).emit("newMessage", newMessage)

        response.status(201).send(newMessage)
    } catch (error) {
        console.log(`Error in sendMessage: ${error}`);
        response.status(500).send({ error: "Internal server error" })
    }
}