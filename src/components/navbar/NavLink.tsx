"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavItem {
  href: string;
  title: string;
}
interface Props {
  navlink: NavItem;
  className?: string;
}

const NavLink = ({ navlink, className }: Props) => {
  const activePath = usePathname();
  const activeStyle = "rounded-full bg-white text-bgSoft";
  const defaultLinkStyle = "text-xl p-3 text-center min-w-28  font-bold";

  return (
    <Link
      className={`${defaultLinkStyle} ${
        activePath === navlink.href && activeStyle
      } ${className}`}
      href={navlink.href}
    >
      {navlink.title}
    </Link>
  );
};

export default NavLink;
