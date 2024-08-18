import Link from "next/link";

function Button({ children, to, hidden }) {
  return (
    !hidden && (
      <Link
        href={to}
        className="bg-transparent  px-6 py-3 rounded-md border border-black font-bold text- hover:bg-primary hover:text-white hover:border-none "
      >
        {children}
      </Link>
    )
  );
}

export default Button;
