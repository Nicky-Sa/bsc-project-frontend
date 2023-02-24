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
    balanceLeft: 0,
  },
};

const slice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const { currentPackageLevel, balanceLeft, ...userInfo } = action.payload;
      state.userInfo = userInfo;
      state.packageInfo.currentPackageLevel = currentPackageLevel;
      state.packageInfo.balanceLeft = balanceLeft;
    },
  },
});

export const { setCurrentUser } = slice.actions;
export const currentUserReducer = slice.reducer;

//  const userInfo = useSelector((state: storeType) => state.currentUserReducer.userInfo)
