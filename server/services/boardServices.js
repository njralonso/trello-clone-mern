import Board from "../models/boardModel.js";

export const createNewBoard = async (data) => {
	return await Board.create(data)
}

export const getBoards = async () => {
	return await Board.find()
}

export const getBoardsById = async (id) => {
	return await Board.findById(id)
}