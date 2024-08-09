import logo from "../../assets/imags/logo.png";
import Image from "next/image";

function Logo() {
  return <Image src={logo} alt="Logo" className="h-16 w-64" />;
}

export default Logo;
