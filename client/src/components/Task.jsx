const Task = ({ list }) => {
	const { task } = list

	return (
		<>
			{task && task.map((task, i) => (
				<div key={i} className="bg-red-900 dark:bg-custom-dark-gray shadow-md rounded-lg p-4 mb-4">
					<h3 className="text-lg font-semibold text-custom-black dark:text-custom-white">{task.title}</h3>
				</div>
			))}
		</>
	);
};

export default Task