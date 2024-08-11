import Image from "next/image";
import Button from "../Button/button";
import Line from "../Line/line";

function HomeContent1() {
  return (
    <div className="flex flex-col justify-center md:justify-between md:gap-24 md:flex-row mx-4 mt-4 flex-shrink ">
      <div className="flex-shrink pb-10">
        <p className="text-4xl font-bold align-middle ">Watch Latest Message</p>
        <Line />
        <p className="my-5 text-base">
          Watch all the latest teachings from Ayat Mekane Eyesus Church Youtube
          Channel.
        </p>

        <Button>All Message</Button>
      </div>

      <div className=" w-full md:w-1/3 h-96 flex justify-center align-middle min-w-[430px]">
        <iframe
          className="w-full h-5/6"
          src="https://www.youtube.com/embed/RTnXRKm6kws"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default HomeContent1;
