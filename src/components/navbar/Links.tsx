import React from "react";
import NavLink from "./NavLink";
import { auth, signOut } from "@/lib/auth";
import { handleSignOut } from "@/lib/actions";
import Logout from "./Logout";

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
      {isAuthenticated ? (
        <>
          {isAdmin && (
            <NavLink
              className={"bg-white rounded-md text-bgSoft"}
              navlink={{ title: "Admin", href: "/admin" }}
            />
          )}
          {/* <NavLink navlink={{ href: "/logout", title: "Logout" }} /> */}
          <Logout/>
        </>
      ) : (
        <>
          <NavLink navlink={{ href: "/login", title: "Login" }} />
        </>
      )}
    </>
  );
};

export default Links;
