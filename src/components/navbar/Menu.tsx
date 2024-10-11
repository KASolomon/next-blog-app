"use client";
import { useState } from "react";
import Links from "./Links";
import Image from "next/image";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={{display :'contents'}}>
      
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image src="/menu.png" height={28} width={30} className="top-2" alt="" />
      </button>
      </div>
      <div
        className={`${
          !isOpen && "hidden"
        } absolute z-50 flex flex-col min-h-screen items-center top-20 right-0  gap-4 justify-center w-auto p-8 bg-background`}
      >
        <Links />
      </div>
    </>
  );
};

export default Menu;
