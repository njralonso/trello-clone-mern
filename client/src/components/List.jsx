import { useState } from "react"
import { useLists } from "../hooks/useLists"
import { useTask } from "../hooks/useTasks"
import FormList from "./FormList"
import FormTask from "./FormTask"
import Task from "./Task"

const List = ({ boardId }) => {
	const { lists, addLists, setRefreshList } = useLists(boardId)
	const [showAddListButton, setShowAddListButton] = useState(false)
	const [listName, setListName] = useState("")

	if (!lists) return <p>Cargando...</p>

	// Shows form to add new list
	const handleShowFormList = () => {
		setShowAddListButton(true)
	}

	const handleAddList = () => {
		addLists(boardId, listName)
		setShowAddListButton(false)
		setRefreshList(true)
		setListName("")
	}

	return (
		<>
			<div className="flex dark:text-custom-white gap-4 overflow-x-scroll p-4">
				{lists.map((l, i) => (
					<ListItem key={i} list={l} />
				))}

				{!showAddListButton ? (
					<button
						onClick={handleShowFormList}
						className="flex items-center gap-2 px-6 py-3 bg-custom-white text-custom-black rounded-md hover:bg-custom-gray transition-all h-min"
					>
						Añadir una lista
					</button>
				) : (
					<FormList listName={listName} setListName={setListName} handleAddList={handleAddList} />
				)}
			</div>
		</>
	)
}


const ListItem = ({ list }) => {
	const [taskName, setTaskName] = useState("")
	const [isVisible, setIsVisible] = useState(false)
	const { task, setRefreshTask, addTask } = useTask(list._id)

	const handleAddTask = () => {
		addTask(list, taskName);
		setIsVisible(false);
		setRefreshTask(true);
		setTaskName("");
	};

	return (
		<div className="min-w-[320px] px-6 py-4 bg-custom-gray rounded-lg shadow-lg">
			<div className="space-y-4">
				<p className="text-lg font-semibold text-custom-white">{list.title}</p>
			</div>
			<ul>
				<Task task={task} />
			</ul>

			{/* Formulario dentro del componente de la lista */}
			<FormTask
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				taskName={taskName}
				setTaskName={setTaskName}
				handleAddTask={handleAddTask}
			/>

			<button
				onClick={() => setIsVisible(!isVisible)}
				className="w-full bg-custom-teal text-white font-medium py-2 rounded-lg hover:bg-custom-teal/50 transition-all"
			>
				Agregar tarea
			</button>
		</div>
	)
}

export default List