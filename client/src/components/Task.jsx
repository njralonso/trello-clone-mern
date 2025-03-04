import { useState, useEffect } from "react"
import { useTask } from "../hooks/tasks/useTasks";
import useTaskRemove from "../hooks/tasks/useTaskRemove";

const Task = ({ task }) => {
	const [tasks, setTasks] = useState([]);
	const { taskRemove } = useTaskRemove()

	useEffect(() => {
		setTasks([...task])
	}, [task])

	const handleDeleteTask = (taskId) => {
		taskRemove(taskId)
		setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
	};

	return (
		<ul>
			{tasks.map((item) => (
				<TaskItem key={item._id} task={item} handleDeleteTask={handleDeleteTask} />
			))}
		</ul>
	);
};


const TaskItem = ({ task, handleDeleteTask }) => {
	const { editTitle } = useTask()
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
				<>
					< p className="break-words whitespace-normal">{isEditing ? task.title : taskTitle}</p>
					<button onClick={() => handleDeleteTask(task._id)} className="hover:bg-white hover:rounded-md">❌</button>
				</>
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