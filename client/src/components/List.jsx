import { useState } from "react"
import { useLists } from "../hooks/useLists"
import FormList from "./FormList"

const List = ({ boardId }) => {
	const { lists, addLists, setRefresh } = useLists(boardId)
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
		setRefresh(true)
		setListName("")
	}

	return (
		<>
			<div className="flex dark:text-custom-white gap-4 overflow-x-scroll">
				{lists.map((l, i) => (
					<div key={i} className="min-w-80 px-4 py-2 dark:bg-custom-gray rounded-lg">
						<ul className="space-y-3">
							<li>{l.title}</li>
							<button className="bg-green-300 text-black">Agregar tarea</button>
						</ul>
					</div>
				))}
				{!showAddListButton ? (
					<button
						onClick={handleShowFormList}
						className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all"
					>
						Añade una lista
					</button>
				) : (
					<FormList listName={listName} setListName={setListName} handleAddList={handleAddList} />
				)}
			</div>
		</>
	)
}

export default List