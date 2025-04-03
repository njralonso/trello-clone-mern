import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//_NOTA:: Revisar como funciona el "rejectwithValue"
export const fetchTasksAsync = createAsyncThunk("tasks/fetchTasks", async (listId, { rejectWithValue }) => {
	try {
		const response = await fetch(`http://localhost:3000/api/getTasks/${listId}`)
		if (!response.ok) {
			throw new Error("Error fetching tasks")
		}
		const data = await response.json()
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const createTaskAsync = createAsyncThunk("tasks/createTasks", async (listId, taskTitle, { rejectWithValue }) => {
	console.log("createTaskAsync")
	try {
		const response = await fetch("http://localhost:3000/api/addTasks", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ listId, taskTitle })
		})
		if (!response.ok) {
			throw new Error("Error creating task")
		}
		const data = await response.json()
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const updateTaskAsync = createAsyncThunk("tasks/updateTask", async (taskId, taskTitle, { rejectWithValue }) => {
	try {
		const response = await fetch("http://localhost:3000/api/editTaskTitle", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ taskId, taskTitle })
		})
		if (!response.ok) {
			throw new Error("Error updating task")
		}
		const data = await response.json()
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const deleteTaskAsync = createAsyncThunk("tasks/deleteTask", async (taskId, { rejectWithValue }) => {
	try {
		const response = await fetch(`http://localhost:3000/api/deleteTask`, {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ taskId: taskId })
		})
		if (!response.ok) throw new Error(`Error ${response.status}: No se pudo eliminar la tarea`)
		const data = await response.json()
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

const taskSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: [],
		status: "idle",
		error: null
	},
	reducers: {
		setTask: (state, action) => {
			state.tasks.push(action.payload)
		},
		getTask: (state, action) => {
			state.tasks = action.payload
		},
		updateTask: (state, action) => {
			const { id, updatedTaskTitle } = action.payload
			const task = state.tasks.find(task => task._id === id)
			if (task) {
				task.title = updatedTaskTitle
			}
		},
		deleteTask: (state, action) => {
			state.tasks = state.tasks.filter(task => task._id !== action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
			// Create task cases
			.addCase(createTaskAsync.pending, (state) => {
				state.status = "loading"
				state.error = null
			})
			.addCase(createTaskAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.tasks = action.payload
			})
			.addCase(createTaskAsync.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.payload
			})
			// Getting tasks cases
			.addCase(fetchTasksAsync.pending, (state) => {
				state.status = "loading"
				state.error = null
			})
			.addCase(fetchTasksAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.tasks = action.payload
			})
			.addCase(fetchTasksAsync.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.payload
			})
			// Update task cases
			.addCase(updateTaskAsync.pending, (state) => {
				state.status = "loading"
				state.error = null
			})
			.addCase(updateTaskAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				const { id, updatedTaskTitle } = action.payload
				const task = state.tasks.find(task => task._id === id)
				if (task) {
					task.title = updatedTaskTitle
				}
			})
			.addCase(updateTaskAsync.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.payload
			})
			// Delete task cases
			.addCase(deleteTaskAsync.pending, (state) => {
				state.status = "loading"
				state.error = null
			})
			.addCase(deleteTaskAsync.fulfilled, (state, action) => {
				state.status = "succeeded"
				const taskId = action.payload
				state.tasks = state.tasks.filter(task => task._id !== taskId)
			})
			.addCase(deleteTaskAsync.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.payload
			})
	}
})

export default taskSlice.reducer
export const { setTask, getTask, updateTask, deleteTask } = taskSlice.actions
export const selectAllTasks = (state) => state.tasks.tasks