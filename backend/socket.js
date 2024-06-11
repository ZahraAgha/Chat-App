import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

export const app = express();
export const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"]
    }
});
const userIdsMap = {}
export const getSocketId = (userId) => {
    return userIdsMap[userId]
}
io.on("connect", (socket) => {
    console.log(`Connecting to ${socket.id}`);

    const userId = socket.handshake.query.userId
    userIdsMap[userId] = socket.id
    io.emit("getOnlineUsers", Object.keys(userIdsMap))


    socket.on("disconnect", () => {
        console.log(`Disconnecting from ${socket.id}`);
        delete userIdsMap[userId]
        io.emit("getOnlineUsers", Object.keys(userIdsMap))
    })
}) 