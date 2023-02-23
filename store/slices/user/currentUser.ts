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
    level: "gold",
    daysLeft: 12,
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

//  const userInfo = useSelector((state: storeType) => state.currentUserReducer.userInfo)