export function useRemoveList() {
	async function removeList(listId) {
		try {
			const response = await fetch(`http://localhost:3000/api/deleteList`, {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ listId: listId })
			})
			const data = await response.json()
		} catch (error) { }
	}
	return { removeList }
}