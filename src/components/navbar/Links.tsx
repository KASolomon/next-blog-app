import React from "react";
import NavLink from "./NavLink";
const Links = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];
  const isAuthenticated = true;
  const isAdmin = true;
  return (
    <>
      {links.map((link) => (
        <NavLink navlink={link} key={link.href} />
      ))}
      {isAuthenticated ? (
        <>
          {isAdmin && <NavLink navlink={{ title: "Admin", href: "/admin" }} />}
          <NavLink
            className={"bg-white rounded-md text-bgSoft"}
            navlink={{ href: "/logout", title: "Logout" }}
          />
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
