"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      <Link href={"/"}>Blog</Link>
      <Link href={"/user"}>User</Link>
    </nav>
  );
};

export default MainNav;
