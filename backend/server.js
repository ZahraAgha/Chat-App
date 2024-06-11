import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authroutes from './routes/auth.routes.js'
import messageRoute from './routes/messages.routes.js'
import userRoute from './routes/users.routes.js'
import cookieParser from 'cookie-parser';
import { app, server } from './socket.js'

app.use(express.json())
app.use(cookieParser());
dotenv.config()
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
app.use("/api/auth", authroutes)
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)



mongoose.connect(MONGODB_URL)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`server listening on ${PORT} and succesfully connect database`);
        })
    }).catch((error) => {
        console.log(error);
    })