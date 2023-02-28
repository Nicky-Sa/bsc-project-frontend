"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as userActions from "@/store/slices/user/currentUser";
import { usePathname, useRouter } from "next/navigation";

type propsType = {
  user: any;
};

const SetUser: React.FC<propsType> = ({ user }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  console.log(user)

  useEffect(() => {
    if (user) {
      // authorised
      dispatch(userActions.setCurrentUser(user));
    }
  }, [dispatch, pathname, router, user]);

  return null;
};

export default SetUser;
