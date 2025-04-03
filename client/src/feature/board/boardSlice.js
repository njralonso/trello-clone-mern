import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createBoardAsync = createAsyncThunk(
	"boards/createBoardAsync",
	async (title, { rejectWithValue }) => {
		try {
			const response = await fetch("http://localhost:3000/api/create-new-board", {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title })
			})

			if (!response.ok) {
				const errorData = await response.json(); // Intentar obtener el mensaje de error del servidor
				throw new Error(errorData?.message || "Error al crear el board");
			}

			const data = await response.json()
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
export const fetchBoardAsync = createAsyncThunk(
	"boards/fetchBoardAsync",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch("http://localhost:3000/api/getBoards");
			if (!response.ok) {
				throw new Error("Error fetching boards");
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
)

export const updateBoardAsync = createAsyncThunk(
	"boards/updateBoardAsync",
	async ({ boardId, newTitle }, { rejectWithValue }) => {
		try {
			const response = await fetch("http://localhost:3000/api/editBoardTitle", {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ boardId, newTitle })
			})
			if (!response.ok) {
				throw new Error("Error updating board title")
			}
			const data = await response.json()
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const deleteBoardAsync = createAsyncThunk(
	"boards/deleteBoardAsync",
	async (boardId, { rejectWithValue }) => {
		try {
			const response = await fetch("http://localhost:3000/api/deleteBoard", {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ boardId })
			})
			if (!response.ok) {
				throw new Error("Error deleting board")
			}
			const data = await response.json()
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const boardSlice = createSlice({
	name: "boards",
	initialState: {
		boards: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setBoards: (state, action) => {
			state.boards = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			// Create board
			.addCase(createBoardAsync.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(createBoardAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.boards.push(action.payload)
			})
			.addCase(createBoardAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			// Fetch boards
			.addCase(fetchBoardAsync.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchBoardAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.boards = action.payload
			})
			.addCase(fetchBoardAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			// Update board
			.addCase(updateBoardAsync.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(updateBoardAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				const { boardId, newTitle } = action.payload
				const board = state.boards.find(board => board._id === boardId)
				if (board) {
					board.title = newTitle
				}
			})
			.addCase(updateBoardAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			// Delete board
			.addCase(deleteBoardAsync.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(deleteBoardAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.boards = state.boards.filter(board => board._id !== action.payload)
			})
			.addCase(deleteBoardAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
	},
})

export default boardSlice.reducer;
export const { setBoards } = boardSlice.actions;
export const selectAllBoards = (state) => state.boards.boards;
