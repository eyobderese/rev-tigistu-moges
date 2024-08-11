const { default: Image } = require("next/image");
import persona from "../../assets/imags/persona.png";
import logo from "../../assets/imags/church_logo.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function ArticleCard() {
  return (
    <div className="flex flex-col p-2 max-w-[600px] gap-3 mt-5">
      <div>
        <Image src={persona} className="rounded-3xl" />
      </div>

      <div className="flex gap-3 w">
        <div className="flex flex-col gap-2">
          <p className="font-extrabold text-xl">ዕውቀት ማጣት</p>
          <p className=" text-lg overflow-hidden whitespace-normal line-clamp-2 leading-tight ">
            እግዚአብሔር ፈጣሪ ነው። ነገር ግን ፈጣሪ ብቻ አይደለም። አዳሽም ነው! የፈጠረው ቢበላሽ ይሠራዋል፣ ቢሰበር
          </p>
          <div className="flex gap-2">
            <p className="font-bold text-[16px] text-primary">Read atricle </p>
            <ArrowRightIcon className="size-6 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
