import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../services/userService';

const initialState = {
	users: null,
};

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async () => {
	const users = await getUsers();
  return users;
})

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
		deleteUser: (state, action) => {
			state.users.splice(
				state.users.findIndex(u => u.id === action.payload),
				1
			);
		},
  },
	extraReducers: {
    // @ts-ignore
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
    },
  }
})

export const { deleteUser } = userSlice.actions;

export default userSlice.reducer;
