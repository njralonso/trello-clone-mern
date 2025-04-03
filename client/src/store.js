import { configureStore } from '@reduxjs/toolkit';
import listReducer from './feature/lists/listSlice';
import taskSlice from './feature/tasks/taskSlice';
import boardSlice from './feature/board/boardSlice';

export const store = configureStore({
	reducer: {
		lists: listReducer,
		tasks: taskSlice,
		boards: boardSlice
	}
})

// export default store;