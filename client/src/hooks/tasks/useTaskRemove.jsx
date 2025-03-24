function useTaskRemove() {
	async function taskRemove(taskId) {
		try {
			const response = await fetch(`http://localhost:3000/api/deleteTask`, {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ taskId: taskId })
			})

			if (!response.ok) throw new Error(`Error ${response.status}: No se pudo eliminar la tarea`)
			const data = await response.json()
		} catch (error) {
			console.error("Error al eliminar la tarea:", error.message);
		}
	}
	return { taskRemove }
}

export default useTaskRemove