import List from "../models/listModel.js";
import Board from "../models/boardModel.js";

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
	const { listId } = data
	return await List.findOne({ _id: listId }).deleteOne({ _id: listId })
}