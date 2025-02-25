const Task = ({ task }) => {
	return (
		<>
			{task.map((item, i) => (
				<li
					key={i}
					className="bg-custom-black p-3 rounded-lg shadow-sm border border-custom-gray text-custom-white hover:bg-custom-teal/50 transition-all"
				>
					<p className="break-words whitespace-normal">
						{item.title}
					</p>
				</li>
			))}
		</>
	)
}

export default Task