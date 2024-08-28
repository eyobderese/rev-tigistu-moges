import Button from "../Button/button";
import Line from "../Line/line";

function Message({ content }) {
  const videoId = content.videoLink.url.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="flex flex-col justify-center md:justify-between md:gap-10 lg:flex-row mx-4 mt-4 flex-shrink ">
      <div className="flex-shrink pb-10 self-center">
        <p className="text-[24px] leading-[27.84px] md:text-[30px] md:leading-[34.8px]  lg:text-[36px] lg:leading-[41.76px] font-bold align-middle ">
          Watch Latest Message
        </p>
        <Line />
        <p className="my-5 text-[16px] leading-[16.32px] md:text-[17px] md:leading-[23.8px]">
          {content.message}
        </p>

        <Button to="/">All Message</Button>
      </div>

      <div className=" w-full lg:w-[45%] h-96 flex justify-center align-middle lg:min-w-[430px] overflow-hidden max-h-[500px]">
        <iframe
          className="w-full h-5/6 overflow-hidden"
          src={embedUrl}
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
