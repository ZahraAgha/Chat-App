import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        required: true,
    }
}, { timestamps: true })

export default mongoose.model("User", UserSchema)