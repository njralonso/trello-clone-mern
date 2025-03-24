import { useState, useEffect } from "react"
import { useLists } from "../hooks/list/useLists"
import { useTask } from "../hooks/tasks/useTasks"
import FormList from "./FormList"
import FormTask from "./FormTask"
import Task from "./Task"
import { useRemoveList } from "../hooks/list/useRemoveList"
import { useAppSelector } from "../hooks"
import { selectAllLists } from "../feature/lists/listSlice"

const List = ({ boardId }) => {
	// const { lists, addLists, setRefreshList } = useLists(boardId)
	const { addLists } = useLists(boardId)
	const lists = useAppSelector(selectAllLists);
	const { removeList } = useRemoveList()
	const [showAddListButton, setShowAddListButton] = useState(false)
	const [listName, setListName] = useState("")
	// const [list, setList] = useState([...lists])
	console.log("sdafaf", lists, "LISTS componente List")
	// if (!list) return <p>Cargando...</p>

	// useEffect(() => {
	// 	setList([...lists])
	// }, [lists])


	const handleRemoveList = (listId) => {
		removeList(listId)
		setList(prevList => prevList.filter(list => list._id !== listId))
	}

	// Shows form to add new list
	const handleShowFormList = () => {
		setShowAddListButton(true)
	}

	const handleAddList = () => {
		addLists(boardId, listName)
		setShowAddListButton(false)
		// setRefreshList(true)
		setListName("")
	}

	return (
		<>
			<div className="flex dark:text-custom-white gap-4">
				{/* {list.map((l, i) => (
					<ListItem key={i} list={l} handleRemoveList={handleRemoveList} />
				))} */}

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


const ListItem = ({ list, handleRemoveList }) => {
	const { task, setRefreshTask, addTask } = useTask(list._id)
	const { editTitle } = useLists()
	const { removeList } = useRemoveList()
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

	const handleSendNewTitle = (e) => {
		e.preventDefault()
		if (newListTitle.trim() === "") return; // Evitar títulos vacíos
		editTitle(newListTitle, list._id)
		setListTitle(false)
	}

	const handleAddTask = () => {
		addTask(list, taskName);
		setIsVisible(false);
		setRefreshTask(true);
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
				<Task task={task} color={"red"} />
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