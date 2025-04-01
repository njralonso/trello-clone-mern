import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchTasksAsync, selectAllTasks } from "../../feature/tasks/taskSlice"

export function useGetTasks(listId) {
	const dispatch = useAppDispatch()
	const tasks = useAppSelector(selectAllTasks)
	const status = useAppSelector((state) => state.tasks.status)
	const error = useAppSelector((state) => state.tasks.error)

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchTasksAsync(listId))
		}
	}, [listId, dispatch, status])

	return { tasks, status, error }
}