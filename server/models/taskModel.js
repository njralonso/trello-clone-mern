import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	list: { type: String, required: true },
	notes: { type: [String] },
	shared: { type: [String] }
})

const Task = mongoose.model("Task", taskSchema)

export default Task