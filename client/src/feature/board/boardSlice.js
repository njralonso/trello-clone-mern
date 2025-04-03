import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncBoards = createAsyncThunk(
	"boards/fetchAsyncBoards", async ({ rejectWithValue }) => {
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
	})

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
			.addCase(fetchAsyncBoards.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchAsyncBoards.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.boards = action.payload;
			})
			.addCase(fetchAsyncBoards.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
})

export default boardSlice.reducer;

