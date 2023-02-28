import { createSlice } from "@reduxjs/toolkit";
import { userState } from "@/store/slices/user/type";

const initialState: userState = {
  userInfo: {
    createdAt: "",
    updatedAt: "",
    username: "",
    phoneNumber: "",
    fullName: "",
    role: "",
  },
  packageInfo: {
    currentPackageLevel: null,
    currentBalance: 0,
  },
};

const slice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const { currentPackageLevel, currentBalance, ...userInfo } = action.payload;
      state.userInfo = userInfo;
      state.packageInfo.currentPackageLevel = currentPackageLevel;
      state.packageInfo.currentBalance = currentBalance;
    },
  },
});

export const { setCurrentUser } = slice.actions;
export const currentUserReducer = slice.reducer;

