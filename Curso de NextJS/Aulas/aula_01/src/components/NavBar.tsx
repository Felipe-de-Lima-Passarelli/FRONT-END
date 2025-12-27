"use client";

import Link from "next/link";
//Next
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav>
      <h2 className="my-2">Módulo 5 - Link Ativo (usePathname)</h2>
      <div className="flex flex-row gap-2">
        <Link
          href="/"
          className={
            "bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500 " +
            `${pathName === "/" ? "active" : ""}`
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            "bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500 " +
            `${pathName === "/about" ? "active" : ""}`
          }
        >
          Sobre
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
