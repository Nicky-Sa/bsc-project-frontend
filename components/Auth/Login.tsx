import React from "react";
import {useSelector} from "react-redux";
import {storeType} from "@/store";

const Login: React.FC = () => {
  const currentUser = useSelector((state: storeType) => state.currentUserReducer)

  return (
    <div>
      لاگین
    </div>
  );
};

export default Login;
