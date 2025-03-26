import { useState } from "react"

import FormTask from "./FormTask"
import FormList from "./FormList"
import Task from "./Task"
import { useGetLists } from "../hooks/list/useGetLists"
import { useAppDispatch } from "../hooks"
import { editListTitle } from "../feature/lists/listSlice"
import { addNewList } from "../feature/lists/listSlice"

const List = ({ boardId }) => {
	const dispatch = useAppDispatch()
	const { lists, error, status } = useGetLists(boardId)
	const [isVisibleAddList, setIsVisibleAddList] = useState(false)
	const [listTitle, setListTitle] = useState("")

	if (status === "loading") console.log("Cargando...")
	if (status === "failed") console.log(error)

	const handleShowFormList = () => {
		setIsVisibleAddList(!isVisibleAddList)
	}

	const handleAddList = () => {
		dispatch(addNewList({ board: boardId, title: listTitle }))
		setListTitle("")
	}

	return (
		<>
			<div className="flex dark:text-custom-white gap-4">
				{lists.map((list, i) => (
					<div key={i} className="min-w-80 w-80 px-6 py-4 bg-custom-gray rounded-lg shadow-lg overflow-hidden">
						<div className="space-y-4 flex justify-between">
							<ListItem list={list} />
						</div>

						{/* <ul className="max-h-[70vh] mt-4 overflow-x-hidden">
							<Task list={lists._id} color={"red"} />
						</ul> */}

						{
							/* Formulario dentro del componente de la lista 
							<FormTask
							 isVisible={isVisible}
							 setIsVisible={setIsVisible}
							 taskName={taskName}
							 setTaskName={setTaskName}
							 handleAddTask={handleAddTask}
							/> */
						}

						{/* <button
							// onClick={() => setIsVisible(!isVisible)}
							className="w-full bg-custom-teal text-white font-medium py-2 rounded-lg hover:bg-custom-teal/50 transition-all mt-4"
						>
							Agregar tarea
						</button> */}
					</div>
				))}

				{
					isVisibleAddList ? (
						<FormList listTitle={listTitle} setListTitle={setListTitle} handleAddList={handleAddList} />
					) : (
						<button
							onClick={handleShowFormList}
							className="gap-2 px-6 py-3 bg-custom-white text-custom-black rounded-md hover:bg-custom-gray transition-all h-min min-w-80 w-80"
						>
							Añadir una lista
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
	console.log(list, "list del componente ListItem")
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