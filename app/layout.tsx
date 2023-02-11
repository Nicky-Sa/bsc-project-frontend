"use client";
import React from "react";
import "@/global/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { classNames } from "@/utils/functions";
import { childrenType } from "@/global/types";
import { peyda } from "@/utils/assets/font/font-const";
import store, { storePersist } from "@/store";
import Toast from "@/components/Notification/Toast";

const RootLayout: React.FC<childrenType> = ({ children }) => {
  return (
    <html lang="fa" className={`${peyda.variable}`}>
      <head />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "var(--font-peyda)",
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
                  <Header />
                  <main>{children}</main>
                  <Footer />
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
