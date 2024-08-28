import Image from "next/image";
import persona from "../../assets/imags/reading.png";
import Line from "../Line/line";
import Button from "../Button/button";
import Link from "next/link";

function Bio({ className, ishideden, content }) {
  className = className || "sm:flex-row";
  ishideden = ishideden || false;
  return (
    <div>
      <div className="text-left hidden sm:block md:hidden mx-4">
        {" "}
        <p className="text-[24px] leading-[27.84px] md:text-[30px] md:leading-[34.8px]  lg:text-[36px] lg:leading-[41.76px] font-bold align-middle">
          Who is <span className="text-primary">Rev Tigistu?</span>
        </p>
        <Line className="w-1/2 ml-0" />
      </div>
      <div
        className={`flex flex-col justify-center md:justify-between  md:gap-14   mt-4 flex-shrink relative ${className}`}
      >
        <div className="mx-4 flex-shrink pb-10 max-w-[600px] flex-grow self-center">
          <p className="text-[24px] leading-[27.84px] md:text-[30px] md:leading-[34.8px]  lg:text-[36px] lg:leading-[41.76px] font-bold align-middle sm:hidden md:block ">
            Who is <span className="text-primary">Rev Tigistu?</span>
          </p>
          <Line className="sm:hidden md:block" />
          <p className="my-5 text-base">
            {content.history}
            {!ishideden && (
              <Button
                to="/about"
                className="text-primary underline"
                pageName="About"
              >
                {" "}
                Read More
              </Button>
            )}
          </p>
        </div>
        <div className="flex-grow min-w-[50%]">
          <Image
            src={content.sideImage.filename}
            width={1000}
            height={1000}
            className="relative w-full h-full border"
            alt="Pasters photo"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-14 bg-primary z-0"></div>
      </div>
    </div>
  );
}

export default Bio;
