import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchListAsync, selectAllLists, createListAsync, allTitles } from "../../feature/lists/listSlice"

export function useGetLists(boardId) {
	const dispatch = useAppDispatch();
	const listsInfo = useAppSelector(allTitles)
	const statusTitle = useAppSelector((state) => state.lists.status)
	const errorTitle = useAppSelector((state) => state.lists.error)

	useEffect(() => {
		dispatch(fetchListAsync(boardId));
	}, [dispatch, boardId]); // ✅ Se ejecuta solo cuando `status` cambia

	return { listsInfo, statusTitle, errorTitle }
}

export function useGetListsById(boardId) {
	const dispatch = useAppDispatch();
	const lists = useAppSelector(selectAllLists);
	const status = useAppSelector((state) => state.lists.status);
	const error = useAppSelector((state) => state.lists.error);


	useEffect(() => {
		if (status === "idle") {  // ✅ Solo si no se ha cargado antes
			dispatch(fetchListAsync(boardId));
		}
	}, [dispatch, boardId, status]); // ✅ Se ejecuta solo cuando `status` cambia

	return { lists, status, error };
}

export function useCreateList() {
	const dispatch = useAppDispatch()
	const lists = useAppSelector(selectAllLists)
	const status = useAppSelector((state) => state.lists.status)
	const error = useAppSelector((state) => state.lists.error)

	const handleCreateList = (board, listTitle) => {
		dispatch(createListAsync(board, listTitle))
	}

	return { lists, handleCreateList }
}

export function useRemoveList() {
	async function removeList(listId) {
		try {
			const response = await fetch(`http://localhost:3000/api/deleteList`, {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ listId: listId })
			})
			const data = await response.json()
		} catch (error) { }
	}
	return { removeList }
}