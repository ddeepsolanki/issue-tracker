"use client";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();
  const lists = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {lists.map((list) => (
          <Link
            key={list.href}
            className={classnames({
              "text-zinc-900": list.href === currentPath,
              "text-zinc-500": list.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={list.href}
          >
            {list.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
