import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const listSlice = createSlice({
	name: 'lists',
	initialState: {
		lists: [{ id: 1, title: "Lista 1" }, { id: 2, title: "Lista 2" }],
		status: null,
		error: null
	},
	reducers: {
		getLists: (state) => state.lists,
		setLists: (state, action) => {
			state.lists = action.payload
		},
	}
})

export const { setLists } = listSlice.actions;
export default listSlice.reducer;
export const selectAllLists = (state) => state.lists.lists
export const updateAllLists = (state, action) => state.lists.lists.push(action.payload)
