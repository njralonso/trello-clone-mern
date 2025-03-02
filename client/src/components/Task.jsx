import { useState } from "react"
import { useTask } from "../hooks/useTasks";

const Task = ({ task }) => {
	return (
		<ul>
			{task.map((item, i) => (
				<TaskItem key={i} task={item} />
			))}
		</ul>
	)
}

const TaskItem = ({ task }) => {
	const { editTitle } = useTask()
	const [isEditing, setIsEditing] = useState(false);
	const [taskTitle, setTaskTitle] = useState(task.title);

	const handleDoubleClick = () => {
		setIsEditing(true);
	};

	const handleChange = (e) => {
		setTaskTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskTitle.trim() === "") return;
		setIsEditing(false);
		editTitle(task._id, taskTitle)
	};

	return (
		<li
			onDoubleClick={handleDoubleClick}
			className="bg-custom-black p-3 rounded-lg shadow-sm border border-custom-gray text-custom-white hover:bg-custom-teal/50 transition-all"
		>
			{!isEditing ? (
				<p className="break-words whitespace-normal">{isEditing ? task.title : taskTitle}</p>
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={taskTitle}
						onChange={handleChange}
						autoFocus
						className="w-full"
					/>
				</form>
			)}
		</li>
	);
};

export default Task