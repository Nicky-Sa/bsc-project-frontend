"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as userActions from "@/store/slices/user/currentUser";

type propsType = {
  user: any;
};

const SetUser: React.FC<propsType> = ({ user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user)
    if (user) { // authorised
      dispatch(userActions.setCurrentUser(user));
      // if(pathname?.startsWith("/auth")){
      //   router.replace("/dashboard");
      // }
    }
    // else{ // unauthorised
    //   if(pathname?.startsWith("/dashboard")){
    //     router.replace("/auth");
    //   }
    // }

  }, [dispatch, user]);

  return null;
};

export default SetUser;
