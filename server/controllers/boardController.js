import { createNewBoard, getBoards, getBoardsById, deleteBoardService } from "../services/boardServices.js";

export const newBoard = async (req, res) => {
	try {
		const newBoard = await createNewBoard(req.body)
		res.status(201).json(newBoard)
	} catch (error) {
		res.status(500).json({ message: "Error al crear el tablero" })
	}
}

export const getBoard = async (req, res) => {
	try {
		const boards = await getBoards()
		res.json(boards)
	} catch (error) {
		res.status(500).json({ message: "Error al cargar las listas" })
	}
}

export const getBoardById = async (req, res) => {
	try {
		const board = await getBoardsById(req.params.id)
		res.json(board)
	} catch (error) {
		res.status(500).json({ message: "Error al cargar el Board" })
	}
}

export const deleteBoardController = async (req, res) => {
	try {
		const deleteBoard = await deleteBoardService(req.body)
		res.json({ message: "Board eliminado correctamente" })
	} catch (error) {
		res.status(500).json({ message: "Error al eliminar el board" })
	}
}

