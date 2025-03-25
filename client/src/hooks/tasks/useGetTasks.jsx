import { useState, useEffect } from "react"

export function useGetTasks(listId) {
	const [tasks, setTasks] = useState([])
	const [refreshTask, setRefreshTask] = useState(false)

	async function fetchTasks() {
		try {
			const response = await fetch(`http://localhost:3000/api/getTasks/${listId}`)
			const data = await response.json()
			setTasks(data);
		} catch (error) { } finally {
			// setRefreshTask(false)
		}
	}

	useEffect(() => {
		fetchTasks()
	}, [])

	return { tasks, setTasks, setRefreshTask }
}