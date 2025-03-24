import { useState, useEffect } from "react"

export function useGetBoardById(id) {
	const [board, setBoard] = useState([])

	useEffect(() => {
		if (!id) return;
		const fecthBoardsById = async () => {
			try {
				const response = await fetch(`http://localhost:3000/api/getBoards/${id}`)
				const data = await response.json()
				setBoard(prev => [...prev, data])
			} catch (error) { }
		}
		fecthBoardsById()
	}, [id])
	return { board }
}

export default useGetBoardById;
