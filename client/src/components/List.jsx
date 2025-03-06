import { useState } from "react"
import { useLists } from "../hooks/list/useLists"
import FormList from "./FormList"
import FormTask from "./FormTask"
import Task from "./Task"
import { useRemoveList } from "../hooks/list/useRemoveList"
import { useCreateList } from "../hooks/list/useCreateList"
import { useGetLists } from "../hooks/list/useGetLists"
import { useCreateTask } from "../hooks/tasks/useCreateTask"
import { useGetTasks } from "../hooks/tasks/useGetTasks"

const List = ({ boardId }) => {
	const { editTitle } = useLists()
	const { addLists } = useCreateList()
	const { removeList } = useRemoveList()
	const { lists, setLists, setRefreshLists } = useGetLists(boardId)
	const [listName, setListName] = useState("")
	const [showAddListButton, setShowAddListButton] = useState(false)

	console.log(lists, "componente List")

	const handleRemoveList = (listId) => {
		removeList(listId)
		setLists(prevList => prevList.filter(list => list._id !== listId))
	}

	// Shows form to add new list
	const handleShowFormList = () => {
		setShowAddListButton(true)
	}

	const handleAddList = async () => {
		await addLists(boardId, listName)
		setRefreshLists(true)
		setShowAddListButton(false)
		setListName("")
	}

	const handleSendNewTitle = async (e) => {
		e.preventDefault()
		if (newListTitle.trim() === "") return; // Evitar títulos vacíos
		await editTitle(newListTitle, lists._id)
		setListTitle(false)
	}

	return (
		<>
			<div className="flex dark:text-custom-white gap-4">
				{lists.map((l, i) => (
					<ListItem key={i} list={l} handleRemoveList={handleRemoveList} handleSendNewTitle={handleSendNewTitle} setRefreshLists={setRefreshLists} />
				))}

				{!showAddListButton ? (
					<button
						onClick={handleShowFormList}
						className="gap-2 px-6 py-3 bg-custom-white text-custom-black rounded-md hover:bg-custom-gray transition-all h-min min-w-80 w-80"
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

const ListItem = ({ list, handleRemoveList, handleSendNewTitle }) => {
	const { addTask } = useCreateTask(list._id)
	const { setRefreshTask } = useGetTasks(list._id)
	const [taskName, setTaskName] = useState("")
	const [isVisible, setIsVisible] = useState(false)
	const [listTitle, setListTitle] = useState(false)
	const [newListTitle, setNewListTitle] = useState("")

	const handleEditListTitle = () => {
		setListTitle(true)
		setNewListTitle(list.title)
	}

	const handleChangeTitle = (e) => {
		setNewListTitle(e.target.value);
	}

	const handleAddTask = async () => {
		await addTask(list, taskName);
		setRefreshTask(true)
		setIsVisible(false);
		setTaskName("");
	};

	return (
		<div className="min-w-80 w-80 px-6 py-4 bg-custom-gray rounded-lg shadow-lg overflow-hidden">
			<div className="space-y-4 flex justify-between">
				{!listTitle ? (
					<p onDoubleClick={handleEditListTitle} className="text-lg font-semibold text-custom-white m-0">{newListTitle ? newListTitle : list.title}</p>
				) : (
					<form onSubmit={handleSendNewTitle}>
						<input onChange={handleChangeTitle} value={newListTitle} type="text" autoFocus className="w-full" />
					</form>
				)}
				<button onClick={() => { handleRemoveList(list._id) }} className="hover:bg-white hover:rounded-md">❌</button>
			</div>

			<ul className="max-h-[70vh] mt-4 overflow-x-hidden">
				<Task list={list._id} color={"red"} />
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
				className="w-full bg-custom-teal text-white font-medium py-2 rounded-lg hover:bg-custom-teal/50 transition-all mt-4"
			>
				Agregar tarea
			</button>
		</div>
	)
}

export default List