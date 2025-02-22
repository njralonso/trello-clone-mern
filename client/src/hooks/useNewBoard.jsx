const useNewBoard = (title) => {
	const sendNewBoard = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/create-new-board",
				{
					method: "POST",
					mode: "cors",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ title })
				})
			const data = await response.json();
		} catch (error) { }
	}
	sendNewBoard()
}

export default useNewBoard