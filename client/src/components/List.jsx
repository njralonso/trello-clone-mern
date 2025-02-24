import { useState } from "react"
import { useLists } from "../hooks/useLists"
import { useTask } from "../hooks/useTasks"
import FormList from "./FormList"
import FormTask from "./FormTask"
import Task from "./Task"

const List = ({ boardId }) => {
	const { task, addTask, setRefresh } = useTask()
	const { lists, addLists, setRefresh } = useLists(boardId)
	const [showAddListButton, setShowAddListButton] = useState(false)
	const [listName, setListName] = useState("")
	const [taskName, setTaskName] = useState("")
	const [isVisible, setVisible] = useState(false)

	if (!lists) return <p>Cargando...</p>

	// Shows form to add new list
	const handleShowFormList = () => {
		setShowAddListButton(true)
	}

	const handleAddList = () => {
		addLists(boardId, listName)
		setShowAddListButton(false)
		setRefresh(true)
		setListName("")
	}

	const handleCreateTask = () => {
		setVisible(true)
	}

	const handleAddTask = () => {
		addTask(lists[0]._id, taskName)
		setVisible(false)
		setRefresh(true)
		setTaskName("")
	}

	return (
		<>
			<div className="flex dark:text-custom-white gap-4 overflow-x-scroll p-4">
				{lists.map((l, i) => (
					<div key={i} className="min-w-[320px] px-6 py-4 bg-custom-gray rounded-lg shadow-lg">
						<div className="space-y-4">
							<p className="text-lg font-semibold text-custom-white">
								{l.title}
							</p>
						</div>
						<ul>
							<Task list={l._id} />
						</ul>
						<FormTask isVisible={isVisible} setVisible={setVisible} taskName={taskName} setTaskName={setTaskName} handleAddTask={handleAddTask} />
						<button onClick={handleCreateTask} className="w-full bg-custom-teal text-white font-medium py-2 rounded-lg hover:bg-custom-teal/50 transition-all">
							Agregar tarea
						</button>
					</div>
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

export default List