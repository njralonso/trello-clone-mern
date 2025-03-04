import Task from "../models/taskModel.js"
import List from "../models/listModel.js"

const insertTask = async (data) => {
	const { list } = data
	const task = await Task.create(data)
	const updateList = await List.findOne({ _id: list }).updateOne({ $push: { task: task._id } })
	return { task, updateList }
}

const fetchTask = async () => {
	return await Task.find()
}

const fetchTaskById = async (id) => {
	return await Task.find({ list: id })
}

const editTaskTitleService = async (data) => {
	const { taskTitle, taskId } = data
	console.log(taskTitle, taskId)
	console.log(taskTitle, taskId)
	return await Task.find({ _id: taskId }).updateOne({ title: taskTitle })
}


export const deleteTaskService = async (data) => {
	const { taskId } = data
	return await Task.find({ _id: taskId }).deleteOne({ _id: taskId })
}

export { insertTask, fetchTask, fetchTaskById, editTaskTitleService }