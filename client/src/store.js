import { configureStore } from '@reduxjs/toolkit';
import listReducer from './feature/lists/listSlice';
import taskSlice from './feature/tasks/taskSlice';

export const store = configureStore({
	reducer: {
		lists: listReducer,
		tasks: taskSlice
	}
})

// export default store;