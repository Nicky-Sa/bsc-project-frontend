import {createSlice} from "@reduxjs/toolkit";
import {userState} from "@/store/slices/user/type";

const initialState: userState = {
  id: 0
}

const slice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.id = action.payload.id
    },
  },
});

export const {setCurrentUser} = slice.actions;
export const currentUserReducer = slice.reducer;
