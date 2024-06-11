import express from 'express'
import { signup,login,logout } from '../controllers/auth.controllers.js'
import protectRoutes from '../middlewares/protectRoutes.js';

const router=express.Router()
// router.use(protectRoutes)
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router;