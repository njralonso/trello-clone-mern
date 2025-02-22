import { newBoard, getBoard } from "../controllers/boardController.js"
import { newList, getList } from "../controllers/listController.js"

import express from "express"
import dotenv from "dotenv"
dotenv.config()

const router = express.Router()

router.get("/getBoards", getBoard)
router.post("/create-new-board", newBoard)

router.get("/getLists", getList)
router.post("/addLists", newList)

// router.get("/getTasks", getTasks)
// router.post("/addTasks", addTasks)

export default router