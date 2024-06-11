import express from 'express';
import { getMessage, sendMessage } from '../controllers/messages.controllers.js';
import protectRoutes from '../middlewares/protectRoutes.js';

const router = express.Router()
router.use(protectRoutes)
router.get('/:receiverId', getMessage)
router.post('/:receiverId', sendMessage)


export default router