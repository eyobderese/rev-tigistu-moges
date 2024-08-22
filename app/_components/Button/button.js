"use client";

import Link from "next/link";
import { useContext } from "react";
import { NavigationContext } from "../../_context/navContext";

function Button({ children, to, hidden, pageName }) {
  const { selectedNavItem, setSelectedNavItem } = useContext(NavigationContext);
  // if pageName is provide set the selectedNavItem to pageName else do not use the context
  const onClick = () => {
    if (pageName) {
      setSelectedNavItem(pageName);
    }
  };
  return (
    !hidden && (
      <Link
        onClick={onClick}
        href={to}
        className="bg-transparent  px-6 py-3 rounded-md border border-black font-bold text- hover:bg-primary hover:text-white hover:border-none "
      >
        {children}
      </Link>
    )
  );
}

export default Button;
