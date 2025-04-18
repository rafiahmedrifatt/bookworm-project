import React from "react";

import { Outlet } from "react-router";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
