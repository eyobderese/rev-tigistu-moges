"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
          className="hover:font-bold hover:underline text-white"
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
        <div className="hidden lg:flex gap-8 mr-16 justify-between text-white">
          <NavLinks />
        </div>
        <div>
          <button onClick={togleNavBar} className="lg:hidden mr-4">
            {!open && (
              <Bars3Icon className="size-10 text-white hover:font-bold" />
            )}
            {open && (
              <XMarkIcon className="size-10 text-white hover:font-bold" />
            )}
          </button>
        </div>
      </nav>
      {open && (
        <div className="w-full bg-primary flex flex-col justify-center items-center gap-4 mt-5">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Nav;
