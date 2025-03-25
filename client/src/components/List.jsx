import { useState } from "react"

import FormTask from "./FormTask"
import Task from "./Task"
import { useGetLists } from "../hooks/list/useGetLists"
import { useLists } from "../hooks/list/useLists"
import { useAppDispatch } from "../hooks"
import { editListTitle } from "../feature/lists/listSlice"

const List = ({ boardId }) => {
	const dispatch = useAppDispatch()
	const { lists, error, status } = useGetLists(boardId)
	const { listsTitle, statusTitle, errorTitle } = useLists()

	const [isEditing, setIsEditing] = useState(false)

	const handleChangeTitle = (newTitle, listId) => {
		dispatch(editListTitle({ newTitle, listId }))
	}

	const onEdit = () => {
		setIsEditing(!isEditing)
	}

	if (status === "loading") console.log("Cargando...")
	if (status === "failed") console.log(error)

	const handleSendNewTitle = () => { }

	return (
		<>
			<div className="flex dark:text-custom-white gap-4">
				{lists.map((l, i) => (
					<div key={i} className="min-w-80 w-80 px-6 py-4 bg-custom-gray rounded-lg shadow-lg overflow-hidden">
						<div className="space-y-4 flex justify-between">
							{isEditing ? (
								<form onSubmit={handleSendNewTitle}>
									<input onChange={(e) => handleChangeTitle(e.target.value, l._id)} value={l.title} type="text" autoFocus className="w-full" />
								</form>
							) : (
								<p onDoubleClick={onEdit} className="text-lg font-semibold text-custom-white m-0">{l.title ? l.title : l.title}</p>
							)}
							{/* <button onClick={() => { handleRemoveList(list._id) }} className="hover:bg-white hover:rounded-md">❌</button> */}
						</div>

						<ul className="max-h-[70vh] mt-4 overflow-x-hidden">
							<Task list={lists._id} color={"red"} />
						</ul>

						{/* Formulario dentro del componente de la lista */}
						<FormTask
						// isVisible={isVisible}
						// setIsVisible={setIsVisible}
						// taskName={taskName}
						// setTaskName={setTaskName}
						// handleAddTask={handleAddTask}
						/>

						<button
							// onClick={() => setIsVisible(!isVisible)}
							className="w-full bg-custom-teal text-white font-medium py-2 rounded-lg hover:bg-custom-teal/50 transition-all mt-4"
						>
							Agregar tarea
						</button>
					</div>
				))}

				{/* {
					!showAddListButton ? (
						<button
							onClick={handleShowFormList}
							className="gap-2 px-6 py-3 bg-custom-white text-custom-black rounded-md hover:bg-custom-gray transition-all h-min min-w-80 w-80"
						>
							Añadir una lista
						</button>
					) : (
						<FormList listName={listName} setListName={setListName} handleAddList={handleAddList} />
					)
				} */}
			</div>
		</>
	)
}

// const ListItem = () => {
// 	return ()
// }

export default List