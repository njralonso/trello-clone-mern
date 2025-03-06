export function useCreateTask() {
	async function addTask(list, title) {

		console.log(list, "addtask")

		const response = await fetch("http://localhost:3000/api/addTasks", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ list, title })
		})
		try {
			const data = await response.json()
		} catch (error) { }
	}
	return { addTask }
}