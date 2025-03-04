import { useState, useEffect } from "react"
import { useTask } from "../hooks/useTasks";

const Task = ({ task }) => { // 1 - tareas
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks([...task]) // 2 guarda tareas en estado
	}, [task]) // 3 actualiza el estado cuando se actualizan las tareas

	const handleDeleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task._id !== taskId)); // 4
		console.log(taskId)
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
				<>
					< p className="break-words whitespace-normal">{isEditing ? task.title : taskTitle}</p>
					<button onClick={() => handleDeleteTask(task._id)}>❌</button>
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