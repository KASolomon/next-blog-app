import React from "react";
import Link from 'next/link'
import Links from "./Links";
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-3xl font-bold ">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex justify-end" style={{ minWidth: "60%" }}>
        <div className={"hidden lg:block"}>
          <div className={" flex gap-4"}>
            <Links />
          </div>
        </div>
        <div className={"lg:hidden"}>

        <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
