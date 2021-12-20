import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  token: string;
  userInfo: any;
}

const initialState: UserState = {
  token: "",
  userInfo: {},
};

export const userSlice = createSlice ({
  name: "user",
  initialState,
  reducers: {
    login: (state, data) => {
      console.log(data.payload.user.name);
      state.token = data.payload.token;
      state.userInfo = data.payload.user;
    },
    logout: (state) => {
      state.token = "";
      state.userInfo = {};
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
