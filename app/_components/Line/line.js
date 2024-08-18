function Line({ className }) {
  className = `h-0.5 bg-primary my-3  ${className}`;
  return <div className={className}></div>;
}

export default Line;
