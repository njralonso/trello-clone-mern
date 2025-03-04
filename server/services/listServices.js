import List from "../models/listModel.js";
import Board from "../models/boardModel.js";
import Task from "../models/taskModel.js"

export const createLists = async (data) => {
	const { board } = data
	const createList = await List.create(data)
	const updateBoard = await Board.findOne({ _id: board }).updateOne({ $push: { lists: createList._id } })
	return { createList, updateBoard }
}

export const getLists = async () => {
	return await List.find()
}

export const getListsByBoardId = async (id) => {
	return await List.find({ board: id })
}

export const editListTitle = async (data) => {
	const { newTitle, listId } = data
	return await List.findOne({ _id: listId }).updateOne({ title: newTitle })
}

export const deleteListService = async (data) => {
	try {
		const { listId } = data;

		// Verificar si la lista existe
		const list = await List.findOne({ _id: listId })
		if (!list) {
			return { status: 404, message: 'Lista no encontrada' }; // Lista no existe
		}

		// Eliminar las tareas asociadas a la lista
		await Task.deleteMany({ list: listId });

		// Eliminar la lista
		await List.deleteOne({ _id: listId });

		return { status: 200, message: 'Lista y tareas eliminadas correctamente' }; // Eliminación exitosa

	} catch (error) {
		console.error(error);
		return { status: 500, message: 'Hubo un error al eliminar la lista' }; // Error general
	}
}