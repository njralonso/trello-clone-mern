import { configureStore } from '@reduxjs/toolkit';
import listReducer from './feature/lists/listSlice';

export const store = configureStore({
	reducer: {
		lists: listReducer
	}
})

// export default store;