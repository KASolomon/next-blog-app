import React from "react";
import Links from "./Links";
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-3xl font-bold ">Logo</div>
      <div className="flex justify-end" style={{ minWidth: "60%" }}>
        <div className={'hidden lg:block'}>
        <Links/>

        </div>
        <div className={'lg:hidden'} > 
        <Menu/>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
