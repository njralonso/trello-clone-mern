import { useEffect, useState } from "react"

export function useGetLists(boardId) {
	const [lists, setLists] = useState([])
	const [refreshLists, setRefreshLists] = useState(false)

	async function fetchLists() {
		try {
			const response = await fetch(`http://localhost:3000/api/getLists/${boardId}`)
			const data = await response.json()
			setLists(data)
		}
		catch (error) { }
		setRefreshLists(false)
	}

	useEffect(() => {
		fetchLists()
	}, [refreshLists])

	return { lists, setLists, setRefreshLists, fetchLists }
}