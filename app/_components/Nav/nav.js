"use client";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavigationContext } from "../../_context/navContext";

const NavLinks = () => {
  const { selectedNavItem, setSelectedNavItem } = useContext(NavigationContext);

  useEffect(() => {
    const savedNavItem = localStorage.getItem("selectedNavItem");

    // If a navigation item was saved, use it. Otherwise, use "Home"
    setSelectedNavItem(savedNavItem || "Home");
  }, []);

  const navItem = [
    { name: "Home", link: "/" },
    { name: "Teaching", link: "/teaching" },
    { name: "Article", link: "/article" },
    { name: "About", link: "/about" },
  ];

  return (
    <>
      {navItem.map((item) => (
        <AnimatedLink
          key={item.name}
          href={item.link}
          className={
            selectedNavItem === item.name
              ? "border-b-2 text-[19px] font-bold"
              : ""
          }
          onClick={() => {
            localStorage.setItem("selectedNavItem", item.name);
            setSelectedNavItem(item.name);
          }}
        >
          {item.name}
        </AnimatedLink>
      ))}
    </>
  );
};

/**
 * Renders the navigation component.
 * @returns {JSX.Element} The rendered navigation component.
 */
function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togleNavBar = () => setOpen(!open);

  return (
    <>
      <nav>
        <div className="hidden lg:flex gap-8  justify-around text-white">
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

function AnimatedLink({ href, children, onClick, className }) {
  return (
    <Link
      className={`group text-white transition-all duration-300 ease-in-out hover:font-bold text-[17px] ${className}`}
      href={href}
      onClick={onClick}
    >
      <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
        {children}
      </span>
    </Link>
  );
}

export default Nav;
