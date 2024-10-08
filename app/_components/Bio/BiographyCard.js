import Line from "../Line/line";
import Image from "next/image";
import photo from "@/app/assets/imags/photo1.jpg";

function BiographyCard({ direction, ...props }) {
  var className = "";
  var pad = "border-r-0 pr-20";
  var directionClass = "left-[250px]";
  if (direction == "left") {
    className += "flex-row-reverse";
    directionClass = "right-[250px]";
    pad = "border-l-0 pl-20";
  }

  return (
    <div className="flex flex-col items-center relative lg:gap-4">
      <div className="flex flex-col items-center gap-5 lg:w-[500px] lg:text-center">
        <p className="text-gray-700 text-[19px] leading-[21.8px] lg:text-[21px] lg:leading-[25.2px]">
          {props.title}
        </p>
        <p className="text-[24px] font-bold leading-[27.4px] lg:text[34px] lg:leading-[40.8px]">
          1990-2000
        </p>
        <p className="text-[#666666] text-[16px] leading-[18.4px] lg:text-[17px] lg:leading-[20px]">
          {props.history}
        </p>
        <Line className=" mx-auto w-4/6 m-auto lg:hidden " />
      </div>

      <div className="border border-black lg:hidden">
        <Image
          src={props.image.filename}
          width={416}
          height={278}
          alt="Pasters photo"
        />
      </div>

      <div
        className={`hidden lg:flex  self-end  items-center w-full ${className} `}
      >
        <Line className={`mx-auto w-1 h-[200px] relative ${directionClass} `} />

        <div className={`border border-black bg-primary self-end  ${pad} `}>
          <Image
            src={props.image.filename}
            width={416}
            height={278}
            alt="Pasters photo"
          />
        </div>
      </div>
    </div>
  );
}

export default BiographyCard;
