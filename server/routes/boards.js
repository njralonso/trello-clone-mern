import { newBoard, getBoard } from "../controllers/boardController.js"
import express from "express"
import dotenv from "dotenv"
dotenv.config()

const router = express.Router()

router.get("/getBoards", getBoard)
router.post("/create-new-board", newBoard)

export default router