import Image from "next/image";
// import backgroundImage from "../../assets/imags/persona.png";

function Hero({ content }) {
  return (
    <div className="border  relative bg-cover bg-center max-h-[90vh] max-w-screen m-t items-center overflow-hidden">
      <Image
        src={content.backgroundImage.filename}
        width={1000}
        height={1000}
        className="w-full object-cover"
        alt="background"
      />

      <div className="hidden md:block lg:flex  p-4 absolute bottom-[10%] lg:bottom-[20%]  lg:bg-secondary lg:bg-opacity-50  max-lg:py-10   lg:border border-l-0  lg:border-white rounded-xl w-[490px] lg:w-[640px] lg:h-[312px] items-center justify-center">
        <p className="text-white  text-3xl leading-[31px] lg:text-[40px] l lg:leading-[52px] align-middle w-[90%] text-center lg:text-left max-w-[550px]">
          {content.qoute}
        </p>
      </div>

      <div className="flex flex-col gap-0">
        <div className=" absolute -right-1 bottom-[105px] sm:bottom-[85px] p-[2%] pr-[15%] md:bottom-2/20 md:bg-secondary bg-black bg-opacity-35 md:bg-opacity-80  lg:px-[5%]   border   border-white rounded-t-xl text-white">
          <p className="font-bold text-[15px]  lg:text-[38px] leading-[18px] lg:leading-[45.6px]">
            ቄስ ትዕግስቱ ሞገስ
          </p>
          <p className="font-bold text-[15px]  lg:text-[38px] leading-[18px] lg:leading-[45.6px]">
            Rev Tigistu Moges
          </p>
          <p className="text-[13px] lg:text-[20px]">Ayat Mekaneyesus Church</p>
        </div>

        <div className="bg-primary h-1/6 md:h-28 md:absolute md:bottom-0 md:z-10 p-5 md:hidden">
          <p className="text-white  text-[20px]  text-center mx-auto md:hidden leading-[21px] ">
            {content.qoute}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
