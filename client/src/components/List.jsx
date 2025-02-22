import { useState } from "react"
import Task from "./Task"
import { useLists } from "../hooks/useLists"

const List = () => {
	const { lists, addLists } = useLists()
	// Lista de listas
	const [list, setList] = useState([])

	// Botón para mostar el form de agregar nueva lista
	const [showAddListButton, setShowAddListButton] = useState(false)

	// Valor de la nueva lista en el input
	const [newList, setNewList] = useState("")
	console.log(newList)

	// Muestra el formulario 
	const handleShowFormList = () => {
		setShowAddListButton(true)
	}

	// Envía la nueva lista
	const handleAddNewList = () => {
		addLists(newList)
		setShowAddListButton(false)
		setNewList("")
	}

	return (
		<>
			<div>
				{
					lists.length <= 0 ?
						(<div>
							<button
								onClick={handleShowFormList}
								className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all"
							>
								Añade una lista
							</button>
						</div>
						) : (
							<div className="bg-white p-4 rounded-lg shadow-md w-80 border border-gray-200">
								<ul className="space-y-3">
									{lists.map((task, i) => (
										<Task key={i} task={task} />
									))}
								</ul>
								<button
									onClick={handleShowFormList}
									className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
								>
									➕ Añadir una tarea
								</button>
							</div>

						)
				}
				{showAddListButton ?
					(
						<form className="bg-white p-4 rounded-lg shadow-md w-80 border border-gray-200">
							<input
								onChange={(e) => setNewList(e.target.value)}
								value={newList}
								type="text"
								placeholder="Escribe el nombre de la lista..."
								className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								autoFocus
							/>
							<div className="flex gap-2 mt-3 justify-center">
								<button
									type="button"
									onClick={handleAddNewList}
									className="bg-emerald-500 text-white px-4 py-1.5 rounded-md hover:bg-emerald-600 transition-all font-semibold"
								>
									Agregar lista
								</button>
								<button
									type="button"
									className="p-2 text-gray-500 hover:text-gray-800 border border-gray-400 rounded-md px-4 py-1.5 font-semibold"
								>
									Cancelar ❌
								</button>
							</div>
						</form>
					) : (
						<></>
					)
				}
			</div>
		</>
	)
}

export default List