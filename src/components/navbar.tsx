import Link from "next/link";
import React from "react";
import Container from "./ui/container";
import MainNav from "./main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-2xl">Synapsis Blog Aplication</p>
          </Link>
          <MainNav />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
