import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface UserState {
  name: string;
  username: string;
  email: string;
  isLogged: boolean;
  token: string;
  role: string;
}

const initialState: UserState = {
  name: "",
  username: "",
  email: "",
  isLogged: false,
  token: "",
  role: ""
};

export const userSlice = createSlice ({
  name: "user",
  initialState,
  reducers: {
    login: (state, data) => {
      console.log(data.payload.user.name);
      state.token = data.payload.token;
      state.role = data.payload.user.role;
      state.name = data.payload.user.name;
    },
    logout: (state) => {
      state.token = "";
      state.role =  "";
      state.name = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.isLogged;

export default userSlice.reducer;
