const { default: Image } = require("next/image");
import persona from "../../assets/imags/persona.png";
import logo from "../../assets/imags/church_logo.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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
          <Link href="/article/1">
            <div className="flex gap-2">
              <p className="font-bold text-[16px] text-primary hover:text-[18px]">
                Read atricle{" "}
              </p>
              <ArrowRightIcon className="size-6 text-primary hover:relative hover:left-3" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
