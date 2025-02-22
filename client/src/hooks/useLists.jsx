import { useState, useEffect } from "react"

export function useLists(boardId) {
	const [lists, setLists] = useState([])
	useEffect(() => {
		async function fetchLists() {
			try {
				const response = await fetch(`http://localhost:3000/api/getLists/${boardId}`)
				const data = await response.json()
				setLists(data)
			}
			catch (error) { }
		}
		fetchLists()
	}, [lists])

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

	return { lists, addLists }
}
