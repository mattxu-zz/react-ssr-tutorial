import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const createStore = (preloadedState) => configureStore({
  reducer: userSlice,
	preloadedState,
});
