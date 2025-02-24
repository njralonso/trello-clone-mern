import { insertTask, fetchTask } from "../services/taskService.js";

const newTaskController = async (req, res) => {
	try {
		const task = await insertTask(req.body)
		res.status(201).json(task)
	} catch (error) {
		res.status(500).json({ message: "Error al crear la lista" })
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

export { newTaskController, getTaskController }