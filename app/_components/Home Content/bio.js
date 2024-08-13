import Image from "next/image";
import persona from "../../assets/imags/reading.png";
import Line from "../Line/line";
import Button from "../Button/button";
import Link from "next/link";

function Bio() {
  return (
    <div>
      <div className="text-left hidden sm:block md:hidden mx-4">
        {" "}
        <p className="text-4xl font-bold align-middle ">
          Who is <span className="text-primary">Rev Tigistu?</span>
        </p>
        <Line className="w-1/2 ml-0" />
      </div>
      <div className="flex flex-col justify-center md:justify-between  md:gap-14 sm:flex-row  mt-4 flex-shrink relative">
        <div className="mx-4 flex-shrink pb-10 max-w-[600px]">
          <p className="text-4xl font-bold align-middle sm:hidden md:block ">
            Who is <span className="text-primary">Rev Tigistu?</span>
          </p>
          <Line className="sm:hidden md:block" />
          <p className="my-5 text-base">
            Miles McPherson is the pastor of the Rock Church in San Diego,
            former defensive back for the San Diego Chargers, author, actor,
            motivational speaker, and founder of DoSomethingChurch.org. Miles is
            a unifier who makes the hope of the gospel real, relevant, and
            accessible, to empower people to make a difference in the world.{" "}
            <Link href={"#"} className="text-primary underline">
              See More.
            </Link>
          </p>
        </div>
        <div className="max-h-[350px] md:max-h-[600px] border rounded-md mx-4 sm:min-w-[400px] flex-grow max-w-[700px]">
          <Image src={persona} className="z-10 relative w-full h-full " />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-14 bg-primary z-0"></div>
      </div>
    </div>
  );
}

export default Bio;
