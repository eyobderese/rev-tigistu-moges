import Line from "../Line/line";
import Image from "next/image";
import photo from "@/app/assets/imags/photo1.jpg";

function Biography({ direction }) {
  var className = "";
  var pad = "border-r-0 pr-20";
  var directionClass = "left-[16.5%]";
  if (direction == "left") {
    className += "flex-row-reverse";
    directionClass = "right-[16.5%]";
    pad = "border-l-0 pl-20";
  }
  return (
    <div className="flex flex-col items-center relative lg:gap-4">
      <div className="flex flex-col items-center gap-5 lg:w-[500px] lg:text-center">
        <p className="text-gray-700 text-[19px]">Early Life</p>
        <p className="text-[19px] font-bold">1990-2000</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          corporis animi quae temporibus doloribus, sint laboriosam officia
          incidunt ipsum architecto inventore asperiores eius quam id
          repudiandae soluta pariatur et. Necessitatibus quod iure quisquam
          maiores quos doloribus facere dolorum pariatur eius?
        </p>
        <Line className="w-4/6 m-auto lg:hidden" />
      </div>

      <div className="border border-black lg:hidden">
        <Image src={photo} width={416} height={278} />
      </div>

      <div
        className={`hidden lg:flex  self-end  items-center w-full ${className} `}
      >
        <Line className={`w-1 h-[200px] relative ${directionClass} `} />

        <div className={`border border-black bg-primary self-end  ${pad} `}>
          <Image src={photo} width={416} height={278} />
        </div>
      </div>
    </div>
  );
}

export default Biography;
