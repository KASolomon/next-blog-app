"use client";
import React, { useEffect } from "react";
import { auth } from "@/lib/auth";
import Logout from "../navbar/Logout";
import NavLink from "../navbar/NavLink";
import { Session } from "next-auth";
interface Props {
  userSession: Session | null;
}
const NavAuthButtons = ({ userSession }: Props) => {
  return (
    <>
      {userSession ? (
        <>
          {userSession?.user.isAdmin && (
            <NavLink
              className={"bg-white rounded-md text-bgSoft"}
              navlink={{ title: "Admin", href: "/admin" }}
            />
          )}
          {/* <NavLink navlink={{ href: "/logout", title: "Logout" }} /> */}
          <Logout />
        </>
      ) : (
        <>
          <NavLink navlink={{ href: "/login", title: "Login" }} />
        </>
      )}
    </>
  );
};

export default NavAuthButtons;
