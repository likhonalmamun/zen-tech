import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Main = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <Header></Header>
      </div>
      <div className="min-h-[100vh] z-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
