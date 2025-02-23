import { createLists, getLists, getListsByBoardId } from "../services/listServices.js";

export const newList = async (req, res) => {
	try {
		const newList = await createLists(req.body)
		res.status(201).json(newList)
	} catch (error) {
		res.status(500).json({ message: "Error al crear la lista" })
	}
}

export const getList = async (req, res) => {
	try {
		const lists = await getLists()
		res.json(lists)
	} catch (error) {
		res.status(500).json({ message: "Error al cargar las listas" })
	}
}

export const getListsById = async (req, res) => {
	try {
		const lists = await getListsByBoardId(req.params.id)
		res.json(lists)
	} catch (error) {
		res.status(500).json({ message: "Error al cargar las listas por id de Board" })
	}
}