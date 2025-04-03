import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchListAsync, selectAllLists } from "../../feature/lists/listSlice"

export function useGetLists(boardId) {
	const dispatch = useAppDispatch();
	const lists = useAppSelector(selectAllLists);
	const status = useAppSelector((state) => state.lists.status);
	const error = useAppSelector((state) => state.lists.error);
	console.log(lists, "listas del hook useGetLists")
	useEffect(() => {
		if (status === "idle") {  // ✅ Solo si no se ha cargado antes
			dispatch(fetchListAsync(boardId));
		}
	}, [dispatch, boardId, status]); // ✅ Se ejecuta solo cuando `status` cambia

	return { lists, status, error };
}