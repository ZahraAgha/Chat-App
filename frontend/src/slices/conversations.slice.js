import { createSlice } from "@reduxjs/toolkit";

const conversationSlice = createSlice({
    name: "conversation",
    initialState: {
        conversations: [],
        selectedConversation: null,
    },
    reducers: {
        setConversations: (state, action) => {
            state.conversations = action.payload
        },
        setselectedConversation: (state, action) => {
            state.selectedConversation = action.payload
        }
    }
})
export const {setConversations,setselectedConversation} = conversationSlice.actions;
export default conversationSlice.reducer