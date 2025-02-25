import { useEffect, useState } from "react"

export function useTask(listId) {
	const [task, setTask] = useState([])
	const [refreshTask, setRefreshTask] = useState(false)

	async function fetchTasks() {
		try {
			const response = await fetch(`http://localhost:3000/api/getTasks/${listId}`)
			const data = await response.json()
			setTask(data)
			setRefreshTask(false)
		} catch (error) { }
	}


	async function addTask(list, title) {
		const response = await fetch("http://localhost:3000/api/addTasks", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ list, title })
		})
		try {
			const data = await response.json()
			setTask(prevTask => [...prevTask, data])
		} catch (error) { }
	}

	useEffect(() => {
		fetchTasks()
	}, [refreshTask])

	return { task, setRefreshTask, addTask }
}