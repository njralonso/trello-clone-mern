// import { useEffect } from "react"
// import { useAppDispatch, useAppSelector } from "../hooks"
// import { fetchBoardsAsync, selectAllBoards } from "../feature/board/boardSlice"

// export function useGetBoards() {
// 	const dispatch = useAppDispatch()
// 	const boards = useAppSelector(selectAllBoards)
// 	const status = useAppSelector((state) => state.boards.status)
// 	const error = useAppSelector((state) => state.boards.error)

// 	useEffect(() => {
// 		if (status === "idle") {
// 			dispatch(fetchBoardsAsync())
// 		}
// 	}, [dispatch, status])

// 	return { boards, status, error }
// }