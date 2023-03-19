import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAGZ - App",
  description: "Home page",
  icons: "/fav.png",
};

const Home: React.FC = () => {
  return <div>Home page!</div>;
};

export default Home;
