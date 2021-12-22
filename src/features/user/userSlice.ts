import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  token: any;
  userInfo: any;
}

const initialState: UserState = {
  token: localStorage.getItem("token") || "",
  userInfo: JSON.parse(localStorage.getItem("user") || "{}"),
};

export const userSlice = createSlice ({
  name: "user",
  initialState,
  reducers: {
    login: (state, data) => {
      state.token = data.payload.token;
      state.userInfo = data.payload.user;
      localStorage.setItem("token", data.payload.token);
      localStorage.setItem("user", JSON.stringify(data.payload.user));
    },
    logout: (state) => {
      state.token = "";
      state.userInfo = {};
      localStorage.clear();
    },
    updateUser: (state, data) => {
      state.userInfo = data.payload;
      localStorage.setItem("user", JSON.stringify(data.payload));
    }
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;
