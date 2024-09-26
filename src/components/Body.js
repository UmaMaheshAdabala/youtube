import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <div>
      <div>
        <Head />
      </div>
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
