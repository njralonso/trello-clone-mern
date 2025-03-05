import { useState, useEffect } from "react"

const useGetBoards = () => {
	const [board, setBoards] = useState([])
	const [refresh, setRefresh] = useState(false)

	const fecthBoards = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/getBoards")
			const data = await response.json()
			setBoards(data)
			setRefresh(true)
		} catch (error) { }
	}


	useEffect(() => {
		fecthBoards()
	}, [refresh])

	return { board, setRefresh }
}

export default useGetBoards