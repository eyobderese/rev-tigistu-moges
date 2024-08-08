function Button({ ...delegated }) {
  return (
    <button
      className="bg-transparent  px-6 py-3 rounded-md border border-black font-bold text- hover:bg-primary hover:text-white hover:border-none "
      {...delegated}
    >
      Click me
    </button>
  );
}

export default Button;
