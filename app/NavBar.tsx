import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const lists = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
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
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
