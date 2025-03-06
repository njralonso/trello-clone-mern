import { useEffect, useState } from "react"

export function useEditTask() {
	const [task, setTask] = useState([])
	const [refreshTask, setRefreshTask] = useState(false)

	async function editTitle(taskId, taskTitle) {
		const response = await fetch("http://localhost:3000/api/editTaskTitle", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ taskId, taskTitle })
		})
		try {
			const data = await response.json()
			// if (!data.ok) throw new Error("Error al enviar la petición")
		} catch (error) {
			console.log(error, "Error del catch al editar la tarea")
		}
	}

	return { task, setRefreshTask, editTitle }
}