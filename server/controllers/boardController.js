import { createNewBoard, getBoards } from "../services/boardServices.js";

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

