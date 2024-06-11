// Components
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import { addMessage, setMessage } from "../../slices/messages.slice";
import { useEffect, useRef } from "react";
import useSocket from "../../hooks/useSocket";

const Chat = () => {
  const socket = useSocket()
  const selectedConversation = useSelector((state) => state.conversation.selectedConversation)
  const messages = useSelector((state) => state.messages.messages)
  const dispatch = useDispatch()
  const scrollElement = useRef()

  const getAllMesages = async () => {
    try {
      if (!selectedConversation) {
        return console.log("No conversation selected");
      }
      let response
      if (selectedConversation._id) {
         response = await fetch(`/api/messages/${selectedConversation._id}`)
      }

      const data = await response.json()
      if (!response.ok) {
        return console.log(`Error fetching all messages`);
      }
      if (response.ok) {
        dispatch(setMessage(data))
      }
    } catch (error) {
      console.log(`Error fetching messages`);
    }
  }
  useEffect(() => {
    getAllMesages()
  }, [selectedConversation])
  useEffect(() => {
    if (messages.length > 0) {
      scrollElement?.current.scrollIntoView({ behavior: 'smooth' })
    }

    socket.on("newMessage", (newMessage) => {
      dispatch(addMessage(newMessage))
    })
  }, [messages])

  return (
    <div className="bg-[#f6f6f6] p-5 pb-0 rounded-2xl flex-1 overflow-scroll">
      {messages?.map((message, index) => {
        return (<div key={message._id} ref={index === messages.length - 1 ? scrollElement : null}>
          <Message key={message._id} time={message.createdAt} type={message.receiverId === selectedConversation._id ? "sent" : "received"}>
            {message?.message}
          </Message>
        </div>)
      })}
    </div>
  );
};

export default Chat;
