import mongoose from "mongoose"

const newBoardSchema = new mongoose.Schema({
	title: { type: String, required: true }
})

const NewBoard = mongoose.model("NewBoard", newBoardSchema)
export default NewBoard