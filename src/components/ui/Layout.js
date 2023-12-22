import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import Aside from "./Aside";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div role="main" id="main" className="container_12 clearfix">
        <Toolbar />
        <Aside />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
