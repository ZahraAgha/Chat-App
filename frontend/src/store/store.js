import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../slices/userSlice'
import conversationsReducer from "../slices/conversations.slice";
import messagesReducer from "../slices/messages.slice";

const store = configureStore({
    reducer: {
        user: userReducer,
        conversation: conversationsReducer,
        messages: messagesReducer
    }
})
export default store  