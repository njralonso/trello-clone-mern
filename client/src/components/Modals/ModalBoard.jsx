const ModalTask = ({ handleBoard }) => {
	return (
		<>
			<div>
				<input
					type="text"
					placeholder="Nombre del board"
					onChange={(e) => handleBoard(e.target.value)}
					className="border-2 border-[#393E46] bg-[#EEEEEE] text-[#222831] placeholder:text-[#555555] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-all"
				/>
			</div>
		</>
	)
}

export default ModalTask