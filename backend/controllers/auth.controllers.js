import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
import { generateTokenAndSetCookie  } from '../utils/generatetokenandsetcookie.js';

export const signup = async (request, response) => {
    try {
        const { fullname, password, username, confirmpassword, gender, profilePic } = request.body;
        if (!fullname || !password || !username || !confirmpassword || !gender || !profilePic) {
            return response.status(400).send('Please fill all fields');
        }

        if (password !== confirmpassword) {
            return response.status(400).send('Passwords do not match');
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            fullname,
            password: hashedPassword,
            username,
            gender,
            profilePic: gender === 'female' ? girlProfilePic : boyProfilePic
        });

        generateTokenAndSetCookie(newUser._id, response);
        response.status(201 ).send({ newUser});

    } catch (error) {
        return response.status(500).send('Internal server error signup');
    }
};


export const login = async (request, response) => {

    try {
        const { username, password } = request.body
        if (!password || !username) {
            return response.status(400).send("Please filled all fields")
        }
        const user = await User.findOne({ username })
        if (!user) {
            return response.status(400).send("You dont have an account")
        }
        const correctedpassword = await bcrypt.compare(password, user.password)
        if (!correctedpassword || !username) {
            return response.status(400).send("wrong password or username")
        }
         generateTokenAndSetCookie(user._id, response);

        response.status(201).send(user)
    } catch (error) {
        return response.status(404).send({ error: "Internal server error" })
    }
}

export const logout = async (request, response) => {
    try {
        response.cookie("jwt", "")
        response.status(200).send({ message: "Succesfully logout" })
    } catch (error) {
        return response.status(404).send({ error: "Internal server error" })
    }
}
