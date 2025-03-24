
export function useCreateList() {
	async function addLists(board, title) {
		try {
			const response = await fetch("http://localhost:3000/api/addLists", {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ board, title })
			})
			const newList = await response.json()
		} catch (error) { }
	}
	return { addLists }
}