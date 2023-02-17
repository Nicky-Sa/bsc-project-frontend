"use client";
import React from "react";
import "@/global/globals.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { classNames } from "@/utils/functions";
import { childrenType } from "@/global/types";
import store, { storePersist } from "@/store";
import Toast from "@/Components/Notification/Toast";

const RootLayout: React.FC<childrenType> = ({ children }) => {
  return (
    <html lang="fa">
      <head />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "peyda",
            colorLink: "#283040",
            colorPrimary: "#3D00A1",
            fontSize: 16,
          },
        }}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={storePersist}>
            {() => (
              <>
                <body className={classNames("b1")}>
                  {children}
                  <Toast />
                </body>
              </>
            )}
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </html>
  );
};

export default RootLayout;
