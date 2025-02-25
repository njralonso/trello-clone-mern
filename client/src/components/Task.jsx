const Task = ({ task }) => {
	return (
		<>
			{task.map((item, i) => (
				<li
					key={i}
					className="bg-[#222831] p-3 rounded-lg shadow-sm flex justify-between items-center border border-[#393E46] text-[#EEEEEE] hover:bg-[#2E3239] transition-all"
				>
					{item.title}
				</li>
			))}
		</>
	)
}

export default Task