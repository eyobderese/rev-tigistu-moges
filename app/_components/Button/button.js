"use client";

import Link from "next/link";
import { useContext } from "react";
import { NavigationContext } from "../../_context/navContext";

function Button({ children, to, hidden, pageName, className }) {
  const { selectedNavItem, setSelectedNavItem } = useContext(NavigationContext);
  // if pageName is provide set the selectedNavItem to pageName else do not use the context
  className =
    className ||
    "bg-transparent  px-6 py-3 rounded-md border border-black font-bold text- hover:bg-primary hover:text-white hover:border-none ";
  const onClick = () => {
    if (pageName) {
      localStorage.setItem("selectedNavItem", pageName);
      setSelectedNavItem(pageName);
    }
  };
  return (
    !hidden && (
      <Link onClick={onClick} href={to} className={className}>
        {children}
      </Link>
    )
  );
}

export default Button;
