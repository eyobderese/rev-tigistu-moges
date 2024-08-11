const { default: Image } = require("next/image");
import persona from "../../assets/imags/persona.png";
import logo from "../../assets/imags/church_logo.jpg";

function Card() {
  return (
    <div className="flex flex-col p-2 max-w-[600px] gap-3 mt-5">
      <div>
        <Image src={persona} className="rounded-3xl" />
      </div>

      <div className="flex gap-3 w">
        <div className="w-16 h-16 rounded-full overflow-hidden min-w-[60px] min-h-[60px]">
          <Image src={logo} className="object-cover w-full h-full" />
        </div>

        <div className="flex flex-col">
          <p className="font-extrabold text-xl overflow-hidden whitespace-normal line-clamp-2">
            በቀደመችው ቤተክርስቲያን የመንፈስ ቅዱስ ክብር እንዴት ተገለጠ? // ቄስ ትዕግስቱ ሞገስ //
          </p>
          <p className="opacity-70 text-lg ">20k Views .10 Days Ago</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
