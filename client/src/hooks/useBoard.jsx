import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import {
	createBoardAsync,
	fetchBoardAsync,
	updateBoardAsync,
	deleteBoardAsync,
	selectAllBoards
} from "../feature/board/boardSlice"


function useCreateBoard() {
	const dispatch = useAppDispatch();
	const { status, error } = useAppSelector((state) => state.boards);

	const createBoard = (title) => {
		dispatch(createBoardAsync(title));
	};

	return { createBoard, status, error };
}

function useGetBoards() {
	const dispatch = useAppDispatch()
	const boards = useAppSelector(selectAllBoards)
	const { status, error } = useAppSelector((state) => state.boards);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchBoardAsync())
		}
	}, [dispatch, status])

	return { boards, status, error }
}

function useUpdateBoard() {
	const dispatch = useAppDispatch()
	const { status, error } = useAppSelector((state) => state.boards)

	const updateBoard = (boardId, newTitle) => {
		dispatch(updateBoardAsync({ boardId, newTitle }))
	}

	return { updateBoard, status, error }
}

function useDeleteBoard() {
	const dispatch = useAppDispatch()
	const { status, error } = useAppSelector((state) => state.boards)

	const deleteBoard = (boardId) => {
		dispatch(deleteBoardAsync(boardId))
	}

	return { deleteBoard, status, error }
}


export { useCreateBoard, useGetBoards, useUpdateBoard, useDeleteBoard }