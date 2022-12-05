import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesMenu from "../../components/categories-menu/categories-menu.component";

function Home() {
  return (
    <>
      <CategoriesMenu />
      <Outlet />
    </>
  );
}

export default Home;
