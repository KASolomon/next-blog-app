"use client";
import React, { useState } from "react";
import { NavItem } from "./NavLink";
import Links from "./Links";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <div className={`${isOpen && "hidden"} absolute flex flex-col min-h-screen items-center top-20 right-0 justify-center w-auto p-8 bg-background`}>
        <Links />
      </div>
    </>
  );
};

export default Menu;
