import { useState, useEffect } from "react"

export function useLists() {
	const [lists, setLists] = useState([])

	useEffect(() => {
		async function fetchLists() {
			try {
				const response = await fetch("http://localhost:3000/api/getLists")
				const data = await response.json()
				setLists(data)
			}
			catch (error) { }
		}
		fetchLists()
	}, [])

	async function addLists(title) {
		const response = await fetch("http://localhost:3000/api/addLists", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title })
		})
		try {
			const newList = await response.json()
			setLists([...lists, newList]); // Actualiza estado con la nueva lista
		} catch (error) { }
	}

	return { lists, addLists }
}
