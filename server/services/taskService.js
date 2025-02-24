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
export { insertTask, fetchTask, fetchTaskById }