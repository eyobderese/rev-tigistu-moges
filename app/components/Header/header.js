import Logo from "../Logo/logo";
import Nav from "../Nav/nav";

function Header() {
  return (
    <div className="bg-primary sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-6 flex-wrap flex-shrink">
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
