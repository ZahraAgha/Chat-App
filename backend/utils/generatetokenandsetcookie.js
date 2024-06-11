import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (_id, response) => {
    const token = jwt.sign({ _id }, process.env.JWT_TOKEN, {
        expiresIn: "15d",
    })
    response.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: 'strict'
    })
}