import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: null,
  },
  reducers: {
    login: (state, action) => {
      state.users = action.payload;
    },

    logout: (state) => {
      state.users = null;
    },
  },
});

export const { login,logout } = userSlice.actions;



export const selectUser = (state) => state;





export default userSlice.reducer;






