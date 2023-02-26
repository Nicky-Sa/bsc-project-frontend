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

  useEffect(() => {
    if (user) {
      // authorised
      dispatch(userActions.setCurrentUser(user));
      if (pathname?.startsWith("/auth")) {
        router.replace("/dashboard/user");
      }
    } else {
      // unauthorised
      if (pathname?.startsWith("/dashboard")) {
        router.replace("/auth");
      }
    }
  }, [dispatch, pathname, router, user]);

  return null;
};

export default SetUser;
