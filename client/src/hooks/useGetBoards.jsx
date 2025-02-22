import { useState, useEffect } from "react"

const useGetBoards = () => {
	const [board, setBoards] = useState([])

	useEffect(() => {
		const fecthBoards = async () => {
			try {
				const response = await fetch("http://localhost:3000/api/getBoards")
				const data = await response.json()
				setBoards(data)
			} catch (error) { }
		}
		fecthBoards()
	}, [])
	return { board }
}

export default useGetBoards