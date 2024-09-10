import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <div>
      {links.map((link, index) => (
        <Link key={index} href={link.href}>{link.title}</Link>
      ))}
    </div>
  );
};

export default Navbar;
