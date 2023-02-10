"use client";
import Auth from "@/components/Auth/Auth";

export default function Home() {
  return (
    <main
      className={
        "min-h-[100vh] px-4 md:px-8 flex items-center justify-center bg-gradient-to-r from-primary-dark-10 to-primary-dark-2"
      }
    >
      <Auth />
    </main>
  );
}
