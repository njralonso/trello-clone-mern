import { useQuery } from "@tanstack/react-query"

// function useCreateTask(listId, taskTitle) {
// 	const dispatch = useAppDispatch()
// 	const tasksCreate = useAppSelector(selectAllTasks)
// 	const statusCreate = useAppSelector((state) => state.tasks.status)
// 	const errorCreate = useAppSelector((state) => state.tasks.error)

// 	useEffect(() => {
// 		if (statusCreate === "idle") {
// 			dispatch(createTaskAsync(listId, taskTitle))
// 		}
// 	}, [listId, dispatch, statusCreate])


// 	return { tasksCreate, statusCreate, errorCreate }
// }

function useGetTask(listId) {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["tasks", listId],
		queryFn: async () => {
			const response = await fetch(`http://localhost:3000/api/getTasks/${listId}`, {
				method: "GET",
				mode: "cors",
				headers: { "Content-Type": "application/json" }
			})
			if (!response.ok) throw new Error("Error al obtener las tareas")
			const data = await response.json()
			console.log(data, "data de useGetTask")
			return data
		}
	})

	return { isPending, isError, data, error }
}

// function useUpdateTask() {
// 	const [task, setTask] = useState([])
// 	const [refreshTask, setRefreshTask] = useState(false)

// 	async function editTitle(taskId, taskTitle) {
// 		const response = await fetch("http://localhost:3000/api/editTaskTitle", {
// 			method: "POST",
// 			mode: "cors",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({ taskId, taskTitle })
// 		})
// 		try {
// 			const data = await response.json()
// 			// if (!data.ok) throw new Error("Error al enviar la petición")
// 		} catch (error) {
// 			console.log(error, "Error del catch al editar la tarea")
// 		}
// 	}

// 	return { task, setRefreshTask, editTitle }
// }

// function useRemoveTask() {
// 	async function taskRemove(taskId) {
// 		try {
// 			const response = await fetch(`http://localhost:3000/api/deleteTask`, {
// 				method: "POST",
// 				mode: "cors",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ taskId: taskId })
// 			})

// 			if (!response.ok) throw new Error(`Error ${response.status}: No se pudo eliminar la tarea`)
// 			const data = await response.json()
// 		} catch (error) {
// 			console.error("Error al eliminar la tarea:", error.message);
// 		}
// 	}
// 	return { taskRemove }
// }
export { useGetTask }