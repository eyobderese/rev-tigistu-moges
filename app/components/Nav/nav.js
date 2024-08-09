"use client";
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  const navItem = [
    { name: "Home", link: "/" },
    { name: "Teaching", link: "/" },
    { name: "Article", link: "/" },
    { name: "About", link: "/" },
  ];

  return (
    <>
      {navItem.map((item) => (
        <Link
          href={item.link}
          className="sm:hover:font-bold sm:hover:underline"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

function Nav() {
  const [open, setOpen] = useState(false);

  const togleNavBar = () => setOpen(!open);
  return (
    <>
      <nav>
        <div className="hidden md:flex gap-8 mr-16 justify-between text-white">
          <NavLinks />
        </div>
        <div>
          <button onClick={togleNavBar} className="md:hidden mr-4">
            //
          </button>
        </div>
      </nav>
      {open && (
        <div className="flex flex-col justify-between text-white flex-wrap align-middle gap-4 mr-9">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Nav;
