import React from "react";
import { ModeToggle } from "./them-switcher";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 sticky top-0 z-20 backdrop-blur-lg">
      <Link href="/">
        <h1 className="text-xl font-bold">The Entertainer</h1>
      </Link>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
