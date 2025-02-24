import { useEffect, useState } from "react"

export function useTask(listId = "67bc96d362cad2d083c02ca7") {
	const [task, setTask] = useState([])
	const [refresh, setRefresh] = useState(false)

	async function fetchTasks() {
		try {
			const response = await fetch(`http://localhost:3000/api/getTasks/${listId}`)
			const data = await response.json()
			setTask(data)
			setRefresh(false)
		} catch (error) { }
	}


	async function addTask(list, title) {
		try {
			const response = await fetch("http://localhost:3000/api/addTasks", {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ list, title })
			})
			// const data = await response.json()
		} catch (error) { }
	}

	useEffect(() => {
		fetchTasks()
	}, [refresh])

	return { task, setRefresh, addTask }
}