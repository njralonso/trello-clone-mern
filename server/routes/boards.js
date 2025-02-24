import { newBoard, getBoard, getBoardById } from "../controllers/boardController.js"
import { newList, getList, getListsById } from "../controllers/listController.js"
import { getTaskController, newTaskController, getTaskByIdController } from "../controllers/taskController.js"

import express from "express"
import dotenv from "dotenv"
dotenv.config()

const router = express.Router()

router.get("/getBoards", getBoard)
router.get("/getBoards/:id", getBoardById)
router.post("/create-new-board", newBoard)

router.get("/getLists", getList)
router.get("/getLists/:id", getListsById)
router.post("/addLists", newList)

router.get("/getTasks", getTaskController)
router.get("/getTasks/:id", getTaskByIdController)
router.post("/addTasks", newTaskController)

export default router