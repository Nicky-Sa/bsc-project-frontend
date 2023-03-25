import React from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "TAGZ - App",
  description: "Home page",
  icons: "/fav.png",
};

const Home: React.FC = () => {
  redirect("/auth");
  return <p className={"b1 text-neutral-9"}>Home page!</p>;
};

export default Home;
