import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/ui/header";

function AppLayout() {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10">
        {" "}
        Made by Bipin Rawat{" "}
      </div>
    </div>
  );
}

export default AppLayout;
