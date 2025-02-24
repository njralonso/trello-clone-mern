import mongoose from "mongoose"

const boardSchema = new mongoose.Schema({
	title: { type: String, required: true },
	lists: { type: [] }
})

const Board = mongoose.model("Board", boardSchema)
export default Board