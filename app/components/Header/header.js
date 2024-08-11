import Image from "next/image";
import logo from "../../assets/imags/logo.png";
import Nav from "../Nav/nav";

function Header() {
  return (
    <header className="bg-primary sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-4 flex-wrap flex-shrink">
      <Image src={logo} alt="Logo" className="w-2/12 min-w-[170px]" />
      ;
      <Nav />
    </header>
  );
}

export default Header;
