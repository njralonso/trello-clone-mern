import mongoose from "mongoose"

const listSchema = new mongoose.Schema({
	title: { type: String, required: true },
	board: { type: String, required: true },
	task: { type: [] }
})

const List = mongoose.model("List", listSchema)
export default List