import mongoose from "mongoose"

const listSchema = new mongoose.Schema({
	title: { type: String, required: true },
	board: { type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true }, // RELACIÓN CORRECTA
	task: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }], // RELACIÓN CORRECTA
	shared: { type: [String] }
})

const List = mongoose.model("List", listSchema)
export default List