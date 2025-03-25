import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
// import { setLists } from "../../feature/lists/listSlice"

export function useLists() {
	const [lists, setLists] = useState([])
	const [refreshList, setRefreshList] = useState(false)

	async function editTitle(newTitle, listId) {
		const response = await fetch("http://localhost:3000/api/changeListTitle", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ newTitle, listId })
		})
		try {
			const data = await response.json()
			// if (!data.ok) throw new Error("Error al enviar la petición")
		} catch (error) {
			console.log(error, "Error del catch")
		}
	}

	return { lists, setRefreshList, editTitle }
}
