import { insertTask, fetchTask, fetchTaskById, editTaskTitleService } from "../services/taskService.js";

const newTaskController = async (req, res) => {
	try {
		const task = await insertTask(req.body)
		res.status(201).json(task)
	} catch (error) {
		res.status(500).json({ message: "Error al crear la tarea" })
	}
}

const getTaskController = async (req, res) => {
	try {
		const task = await fetchTask()
		res.status(201).json(task)
	} catch (error) {
		res.status(500).json({ message: "Error al obtener las tareas" })
	}
}

const getTaskByIdController = async (req, res) => {
	try {
		const task = await fetchTaskById(req.params.id)
		res.status(201).json(task)
	} catch (error) {
		res.status(500).json({ message: "Error al obtener las tareas" })
	}
}

const editTaskTitleController = async (req, res) => {
	try {
		const task = await editTaskTitleService(req.body)
		res.status(201).json(task)
	} catch (error) {
		res.status(500).json({ message: "Error al obtener las tareas" })
	}
}

export { newTaskController, getTaskController, getTaskByIdController, editTaskTitleController }