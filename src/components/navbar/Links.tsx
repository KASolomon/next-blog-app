import React from "react";
import NavLink from "./NavLink";
import { auth, signOut } from "@/lib/auth";
import { handleSignOut } from "@/lib/actions";
import Logout from "./Logout";
import NavAuthButtons from "../login/NavAuthButtons";

const Links = async () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];
  const isAuthenticated = await auth();
  const isAdmin = false;
  

  return (
    <>
      {links.map((link) => (
        <NavLink navlink={link} key={link.href} />
      ))}
     <NavAuthButtons isAuthenticated ={isAuthenticated}/>
    </>
  );
};

export default Links;
