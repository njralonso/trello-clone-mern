import { useState, useEffect } from "react"

const useGetBoards = () => {
	const [board, setBoards] = useState([])
	useEffect(() => {
		try {
			const fecthBoards = async () => {
				const response = await fetch("http://localhost:3000/api/getBoards")
				const data = await response.json()
				setBoards(data)
			}
			fecthBoards()
		} catch (error) { }
	}, [board])

	return board
}

export default useGetBoards