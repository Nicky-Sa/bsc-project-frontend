import { createSlice } from "@reduxjs/toolkit";
import { userState } from "@/store/slices/user/type";

const initialState: userState = {
  userInfo: {
    createdAt: "",
    updatedAt: "",
    username: "",
    phoneNumber: null,
    fullName: null,
    role: "",
  },
};

const slice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.userInfo = action.payload
    },
  },
});

export const {setCurrentUser} = slice.actions;
export const currentUserReducer = slice.reducer;
