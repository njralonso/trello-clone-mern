import { useState } from "react"
import { useEditTask } from "../hooks/tasks/useEditTask";
import useTaskRemove from "../hooks/tasks/useTaskRemove";
import { useGetTasks } from "../hooks/tasks/useGetTasks";

const Task = ({ list }) => {
	const { tasks, setTasks, setRefreshTask } = useGetTasks(list)
	const { taskRemove } = useTaskRemove()

	const handleDeleteTask = async (taskId) => {
		await taskRemove(taskId)
		setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
		setRefreshTask(true)
	};

	return (
		<ul>
			{tasks.map((item, i) => (
				<TaskItem key={i} task={item} handleDeleteTask={handleDeleteTask} />
			))}
		</ul>
	);
};

const TaskItem = ({ task, handleDeleteTask }) => {
	const { editTitle } = useEditTask()
	const [isEditing, setIsEditing] = useState(false);
	const [taskTitle, setTaskTitle] = useState(task.title);


	const handleDoubleClick = () => {
		setIsEditing(true);
	};

	const handleChange = (e) => {
		setTaskTitle(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (taskTitle.trim() === "") return;
		setIsEditing(false);
		await editTitle(task._id, taskTitle)
	};

	return (
		<li
			onDoubleClick={handleDoubleClick}
			className="bg-custom-black p-3 rounded-lg shadow-sm border border-custom-gray text-custom-white hover:bg-custom-teal/50 transition-all"
		>
			{!isEditing ? (
				<div className="flex justify-between">
					< p className="break-words whitespace-normal">{isEditing ? task.title : taskTitle}</p>
					<button onClick={() => handleDeleteTask(task._id)} className="hover:bg-white hover:rounded-md">❌</button>
				</div>
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
		</li >
	);
};

export default Task