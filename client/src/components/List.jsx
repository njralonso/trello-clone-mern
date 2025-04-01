import { useState } from "react"
import FormTask from "./FormTask"
import FormList from "./FormList"
import Task from "./Task"
import { useGetLists } from "../hooks/list/useGetLists"
import { useAppDispatch } from "../hooks"
import { editListTitle, addNewList } from "../feature/lists/listSlice"
import { createTaskAsync } from "../feature/tasks/taskSlice"

const List = ({ boardId }) => {
	const dispatch = useAppDispatch()
	const { lists, error, status } = useGetLists(boardId)
	const [isVisibleAddList, setIsVisibleAddList] = useState(false)
	const [listTitle, setListTitle] = useState("")

	const [isVisibleAddTask, setIsVisibleAddTask] = useState(false)
	const [taskTitle, setTaskTitle] = useState("")

	if (status === "loading") console.log("Cargando...")
	if (status === "failed") console.log(error)

	const handleShowFormList = () => {
		setIsVisibleAddList(!isVisibleAddList)
	}

	const handleAddList = () => {
		dispatch(addNewList({ board: boardId, title: listTitle }))
		setListTitle("")
	}

	const handleAddTask = (e, listId, taskTitle) => {
		console.log(taskTitle)
		e.preventDefault()
		// if (taskTitle.trim() === "") return
		dispatch(createTaskAsync(listId, taskTitle))
		setTaskTitle("")
	}

	return (
		<>
			<div className="flex dark:text-custom-white gap-4">
				{lists.map((list, i) => (
					<div key={i} className="min-w-80 w-80 px-6 py-4 bg-custom-gray rounded-lg shadow-lg overflow-hidden">
						<div className="space-y-4 flex justify-between">
							<ListItem
								list={list}
							/>
						</div>

						<ul className="max-h-[70vh] mt-4 overflow-x-hidden">
							<Task
								list={list._id}
								color={"red"}
							/>
						</ul>

						{
							<FormTask
								isVisibleAddTask={isVisibleAddTask}
								setIsVisibleAddTask={setIsVisibleAddTask}
								taskTitle={taskTitle}
								setTaskTitle={setTaskTitle}
								handleAddTask={handleAddTask}
							/>
						}

						<button
							onClick={() => setIsVisibleAddTask(!isVisibleAddTask)}
							className="w-full bg-custom-teal text-white font-medium py-2 rounded-lg hover:bg-custom-teal/50 transition-all mt-4"
						>
							Add Task
						</button>
					</div>
				))}

				{
					isVisibleAddList ? (
						<FormList
							listTitle={listTitle}
							setListTitle={setListTitle}
							handleAddList={handleAddList}
						/>
					) : (
						<button
							onClick={handleShowFormList}
							className="gap-2 px-6 py-3 bg-custom-white text-custom-black rounded-md hover:bg-custom-gray transition-all h-min min-w-80 w-80"
						>
							Add new list
						</button>
					)
				}

			</div>
		</>
	)
}

const ListItem = ({ list }) => {
	const dispatch = useAppDispatch()
	const [isEditing, setIsEditing] = useState(false)
	const [newTitle, setNewTitle] = useState(list.title)

	const handleChangeTitle = (e) => {
		e.preventDefault()
		setNewTitle(e.target.value)
	}

	const handleEditListTitle = () => {
		setIsEditing(!isEditing)
	}

	const handleSendNewTitle = (e) => {
		e.preventDefault()
		if (newTitle) {
			dispatch(editListTitle({ newTitle, listId: list._id }))
			setIsEditing(false)
		}
	}

	return (
		<>
			{
				isEditing ? (
					<form onSubmit={handleSendNewTitle} >
						<input onChange={handleChangeTitle} value={newTitle} type="text" autoFocus className="w-full" />
					</form >
				) : (
					<p onDoubleClick={handleEditListTitle} className="text-lg font-semibold text-custom-white m-0">{list.title ? list.title : list.title}</p>
				)}
			{/* <button onClick={() => { handleRemoveList(list._id) }} className="hover:bg-white hover:rounded-md">❌</button> */}
		</>
	)
}

export default List