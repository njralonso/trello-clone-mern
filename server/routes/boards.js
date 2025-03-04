import { newBoard, getBoard, getBoardById } from "../controllers/boardController.js"
import { newList, getList, getListsById, editListTitleController } from "../controllers/listController.js"
import { getTaskController, newTaskController, getTaskByIdController, editTaskTitleController } from "../controllers/taskController.js"

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
router.post("/changeListTitle", editListTitleController)

router.get("/getTasks", getTaskController)
router.get("/getTasks/:id", getTaskByIdController)
router.post("/addTasks", newTaskController)
router.post("/editTaskTitle", editTaskTitleController)

export default router