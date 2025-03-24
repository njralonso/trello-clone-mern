import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
// import { setLists } from "../../feature/lists/listSlice"

export function useLists(boardId) {
	// const [lists, setLists] = useState([])
	// const [refreshList, setRefreshList] = useState(false)
	const dispatch = useAppDispatch()
	const { updateAllLists } = useAppSelector(state => state.lists)
	console.log(updateAllLists, "lists de store")

	async function fetchLists() {
		try {
			const response = await fetch(`http://localhost:3000/api/getLists/${boardId}`)
			const data = await response.json()
			console.log(data, "DATA DE LISTAS")
			dispatch(setLists(data))
			// setRefreshList(false)
		}
		catch (error) { }
	}

	async function addLists(board, title) {
		const response = await fetch("http://localhost:3000/api/addLists", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ board, title })
		})
		try {
			const newList = await response.json()
			setLists(prevLists => [...prevLists, newList])
			// Actualiza estado con la nueva lista
		} catch (error) { }
	}

	async function editTitle(newTitle, listId) {
		const response = await fetch("http://localhost:3000/api/changeListTitle", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ newTitle, listId })
		})
		try {
			const data = await response.json()
			// if (!data.ok) throw new Error("Error al enviar la petición")
		} catch (error) {
			console.log(error, "Error del catch")
		}
	}

	// useEffect(() => {
	fetchLists()
	// }, [refreshList])

	return { addLists, editTitle }
	// return { lists, addLists, setRefreshList, editTitle }
}
