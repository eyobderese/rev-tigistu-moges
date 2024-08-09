import Image from "next/image";
import Button from "../Button/button";
import Line from "../Line/line";
import image from "../../assets/imags/persona.png";

function home_content() {
  return (
    <div className="flex flex-col justify-center items-center gap-24 sm:flex-row mx-4 mt-4 flex-shrink">
      <div className="flex-shrink pb-10">
        <p className="text-4xl font-bold align-middle ">Watch Latest Message</p>
        <Line />
        <p className="my-5">
          Watch all the latest teachings from Ayat Mekane Eyesus Church Youtube
          Channel.
        </p>

        <Button>All Message</Button>
      </div>

      <div className=" border flex">
        <iframe
          width="560"
          height="315"
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

export default home_content;
