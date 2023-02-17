"use client";
import React from "react";
import Container from "@/Components/Dasboard/Container";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/Components/Map/Map"), {
  loading: () => <p>درحال بارگذاری نقشه...</p>,
  ssr: false,
});

const DashboardPage: React.FC = () => {
  return <Container>
    <Map/>
  </Container>;
};

export default DashboardPage;
