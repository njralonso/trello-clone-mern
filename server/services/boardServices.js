import Board from "../models/boardModel.js";
import List from "../models/listModel.js";
import Task from "../models/taskModel.js";

export const createNewBoard = async (data) => {
	return await Board.create(data)
}

export const getBoards = async () => {
	return await Board.find()
}

export const getBoardsById = async (id) => {
	return await Board.findById(id)
		.populate({
			path: "lists", // Poblar las listas dentro del tablero
			populate: { path: "task" } // Poblar las tareas dentro de cada lista
		});
}

export const deleteBoardService = async (data) => {
	const { boardId } = data
	try {
		const lists = await List.find({ board: boardId })
		const listId = lists.map(list => list._id)
		await Task.deleteMany({ list: { $in: listId } })
		await List.deleteMany({ _id: { $in: listId } })
		await Board.findByIdAndDelete(boardId)
		console.log("Board y todas sus listas y tareas eliminadas correctamente.");
	} catch (error) {
		console.error("Error al eliminar el board:", error);
	}
}