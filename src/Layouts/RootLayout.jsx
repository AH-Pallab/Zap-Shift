import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const RootLayout = () => {
  return (
    <div className="bg-black-4">
      <div className="container p-4 mx-auto space-y-5">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
