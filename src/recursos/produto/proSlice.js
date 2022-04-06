import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addPro: (state, action) => {
      state.push(action.payload);
    },
    editPro: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deletePro: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
});

export const { addPro, editPro, deletePro } = userSlice.actions;
export default userSlice.reducer;