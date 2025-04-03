import { memo } from "react";

const TaskBody = memo(({ task }) => {
	return (
		<div
			key={task._id}
			className="bg-red-900 dark:bg-custom-dark-gray shadow-md rounded-lg p-4 mb-4"
		>
			<h3 className="text-lg font-semibold text-custom-black dark:text-custom-white">
				{task.title}
			</h3>
		</div>
	)
})

function TaskGroup({ tasks = [] }) {
	return tasks.map((task) => <TaskBody key={task._id} task={task} />)
}

const Task = ({ list }) => {
	return <TaskGroup tasks={list.task || []} />
};

export default Task