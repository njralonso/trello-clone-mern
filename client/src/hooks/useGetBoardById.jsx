import { useState, useEffect } from "react"

export function useGetBoardById(id) {
	const [board, setBoard] = useState([])

	if (!id) return;
	const fecthBoardsById = async () => {
		try {
			const response = await fetch(`http://localhost:3000/api/getBoards/${id}`)
			const data = await response.json()
			setBoard(data)
		} catch (error) { }
	}


	useEffect(() => {
<<<<<<< HEAD
		if (!id) return;
		const fecthBoardsById = async () => {
			try {
				const response = await fetch(`http://localhost:3000/api/getBoards/${id}`)
				const data = await response.json()
				setBoard(prev => [...prev, data])
			} catch (error) { }
		}
=======
>>>>>>> a7d36f48fab68147cdda6bd689ab3a36e23e3bd9
		fecthBoardsById()
		setBoard(null)
	}, [id])
	return { board }
}

export default useGetBoardById;
