"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as userActions from "@/store/slices/user/currentUser";

type propsType = {
  user: any;
};

const SetUser: React.FC<propsType> = ({ user }) => {
  // const selectedPolygons = useSelector((state: RootState) => state.selectedPolygonsReducer.polygons)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user)
    if (user) {
      dispatch(userActions.setCurrentUser(user));
    }
  }, [dispatch, user]);
  return <div />;
};

export default SetUser;
