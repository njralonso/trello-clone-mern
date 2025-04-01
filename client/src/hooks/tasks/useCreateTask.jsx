import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { createTaskAsync, selectAllTasks } from "../../feature/tasks/taskSlice"

export function useCreateTask(listId, taskTitle) {
	const dispatch = useAppDispatch()
	const tasksCreate = useAppSelector(selectAllTasks)
	const statusCreate = useAppSelector((state) => state.tasks.status)
	const errorCreate = useAppSelector((state) => state.tasks.error)

	useEffect(() => {
		if (statusCreate === "idle") {
			dispatch(createTaskAsync(listId, taskTitle))
		}
	}, [listId, dispatch, statusCreate])


	return { tasksCreate, statusCreate, errorCreate }
}