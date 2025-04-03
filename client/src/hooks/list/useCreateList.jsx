import { useAppDispatch, useAppSelector } from "../../hooks"
import { createListAsync, selectAllLists, setNewList } from "../../feature/lists/listSlice"
import { useEffect } from "react"

export function useCreateList() {
	const dispatch = useAppDispatch()
	const lists = useAppSelector(selectAllLists)
	const status = useAppSelector((state) => state.lists.status)
	const error = useAppSelector((state) => state.lists.error)


	const handleCreateList = (board, listTitle) => {
		dispatch(createListAsync(board, listTitle))
		dispatch(setNewList(board, listTitle))
	}

	return { handleCreateList }
}