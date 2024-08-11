import Image from "next/image";
import logo from "../../assets/imags/logo.png";
function Footer() {
  return (
    <footer className="bg-primary flex flex-col justify-center  items-center p-3">
      <Image src={logo} alt="Logo" className="w-1/6" />;
      <p className="text-white"> ©Copyright 2024. All Right Reserved</p>
    </footer>
  );
}

export default Footer;
