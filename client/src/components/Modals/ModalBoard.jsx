const ModalTask = ({ handleBoard }) => {
	return (
		<>
			<div className="bg-black p-1">
				<input
					type="text"
					placeholder="board-name"
					onChange={(e) => handleBoard(e.target.value)}
					className="border-2 bg-white" />
			</div>
		</>
	)
}

export default ModalTask