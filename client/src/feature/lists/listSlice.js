import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const fetchListAsync = createAsyncThunk(
	"lists/fetchListAsync", async (boardId, { rejectWithValue }) => {
		try {
			const response = await fetch(`http://localhost:3000/api/getLists/${boardId}`)
			if (!response.ok) {
				throw new Error("Error fetching lists")
			}
			const data = await response.json()
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const updateListAsync = createAsyncThunk(
	"lists/updateListAsync",
	async ({ newTitle, listId }) => {
		const response = await fetch("http://localhost:3000/api/changeListTitle", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ newTitle, listId })
		})
		try {
			const data = await response.json()
			console.log(data, "data del updateListAsync en el slice")
			// if (!data.ok) throw new Error("Error al enviar la petición")
		} catch (error) {
			console.log(error, "Error del catch")
		}
	}
)

export const createListAsync = createAsyncThunk(
	"lists/createListAsync",
	async ({ board, listTitle: title }) => {
		const response = await fetch("http://localhost:3000/api/addLists", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ board, title })
		})
		try {
			const newList = await response.json()
			return newList
		} catch (error) { }
	}
)

const listSlice = createSlice({
	name: 'lists',
	initialState: {
		lists: [],
		status: "idle",
		error: null
	},
	reducers: {
		setLists: (state, action) => {
			state.lists.push(action.payload)
		},
		setListTitle: (state, action) => {
			const { listId, newTitle } = action.payload
			const listToUpdate = state.lists.find((list) => list._id === listId)
			if (listToUpdate) {
				listToUpdate.title = newTitle
			}
		},
		setNewList: (state, action) => {
			const newList = action.payload
			state.lists.push(newList)
		}
	},
	extraReducers: (builder) => {
		builder
			// Case to fetch lists
			.addCase(fetchListAsync.pending, (state) => {
				state.status = "loading"
				state.error = null
			})
			.addCase(fetchListAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.lists = action.payload
			})
			.addCase(fetchListAsync.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.payload
			})
			// Case to edit list title
			.addCase(updateListAsync.fulfilled, (state, action) => {
				const { newTitle, listId } = action.meta.arg
				const listToUpdate = state.lists.find((list) => list._id === listId)
				if (listToUpdate) {
					listToUpdate.title = newTitle
				}
			})
			// Case to add new list
			.addCase(createListAsync.fulfilled, (state, action) => {
				const newList = action.payload.createList
				state.lists.push(newList)
			})
	}
})


export default listSlice.reducer;
export const { setLists, setNewList } = listSlice.actions;
export const selectAllLists = (state) => state.lists.lists

const selectLists = (state) => state.lists.lists;
export const allTitles = createSelector([selectLists], (lists) => {
	return lists.map((list) => list.title);
});