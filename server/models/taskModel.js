import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	list: { type: mongoose.Schema.Types.ObjectId, ref: "List", required: true }, // RELACIÓN CORRECTA
	notes: { type: [String] },
	shared: { type: [String] }
})

const Task = mongoose.model("Task", taskSchema)

export default Task