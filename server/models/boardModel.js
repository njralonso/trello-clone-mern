import mongoose from "mongoose"

const boardSchema = new mongoose.Schema({
	user: { type: [String], required: true },
	title: { type: String, required: true },
	lists: { type: [String] },
	shared: { type: [String] }
})

const Board = mongoose.model("Board", boardSchema)
export default Board