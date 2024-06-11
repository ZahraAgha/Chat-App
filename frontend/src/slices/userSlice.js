import { createSlice } from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        onlineUsers: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload
        }
    }
})
export const { setUser, setOnlineUsers  } = UserReducer.actions
export default UserReducer.reducer