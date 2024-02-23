import React from "react";
import MainLayout from "../Components/MainLayout";
import SideBar from "../Components/SideBar";

// Main Home Page

const Home = () => {
  return (
    <div className="flex flex-row">
      <div className="h-screen ">
        <SideBar />
      </div>
      <div className="flex w-full h-screen p-4 overflow-hidden border-2 border-black">
        <MainLayout />
      </div>
    </div>
  );
};

export default Home;
