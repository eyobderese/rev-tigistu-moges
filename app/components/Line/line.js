function Line({ className }) {
  className = `h-0.5 bg-primary my-3  mx-auto ${className}`;
  return <div className={className}></div>;
}

export default Line;
