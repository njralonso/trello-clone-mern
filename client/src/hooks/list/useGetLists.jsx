import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchLists, selectAllLists } from "../../feature/lists/listSlice"

export function useGetLists(boardId) {
	const dispatch = useAppDispatch();
	const lists = useAppSelector(selectAllLists);
	const status = useAppSelector((state) => state.lists.status);
	const error = useAppSelector((state) => state.lists.error);

	useEffect(() => {
		if (status === "idle") {  // ✅ Solo si no se ha cargado antes
			dispatch(fetchLists(boardId));
		}
	}, [dispatch, boardId, status]); // ✅ Se ejecuta solo cuando `status` cambia

	return { lists, status, error };
}