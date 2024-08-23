import Image from "next/image";
import Button from "../Button/button";
import Line from "../Line/line";

function Message({ content }) {
  return (
    <div className="flex flex-col justify-center md:justify-between md:gap-24 md:flex-row mx-4 mt-4 flex-shrink ">
      <div className="flex-shrink pb-10">
        <p className="text-[24px] leading-[27.84px] md:text-[30px] md:leading-[34.8px]  lg:text-[36px] lg:leading-[41.76px] font-bold align-middle ">
          Watch Latest Message
        </p>
        <Line />
        <p className="my-5 text-[16px] leading-[16.32px] md:text-[17px] md:leading-[23.8px]">
          {content.message}
        </p>

        <Button to="/">All Message</Button>
      </div>

      <div className=" w-full md:w-1/3 h-96 flex justify-center align-middle lg:min-w-[430px] overflow-hidden">
        <iframe
          className="w-full h-5/6 overflow-hidden"
          src={content.videoLink.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Message;
