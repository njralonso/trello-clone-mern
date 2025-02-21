import { useState, useEffect } from "react"

export function useLists() {
	const [lists, setLists] = useState([])
	useEffect(() => {
		async function fetchLists() {
			try {
				const response = await fetch("http://localhost:3000/api/getLists")
				const data = response.json()
				setLists(data)
			}
			catch (error) { }

			// fetchLists()
		}
	}, [])

	async function addLists() { }
} 