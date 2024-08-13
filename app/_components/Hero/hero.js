import Image from "next/image";
import backgroundImage from "../../assets/imags/persona.png";

function Hero() {
  return (
    <div className="border  relative bg-cover bg-center max-h-[90vh] max-w-screen m-t items-center overflow-hidden">
      <Image src={backgroundImage} className="w-full object-cover" />

      <div className="hidden sm:block p-4 absolute bottom-1/3 md:bottom-[20%] left md:bg-secondary md:bg-opacity-50  md:p-10 md:border border-l-0  md:border-white rounded-xl  ">
        <p className="text-white  text-3xl w-96 text-center mx-auto ">
          “ስለዚህ ማንም በክርስቶስ ቢሆን አዲስ ፍጥረት ነው፤ አሮጌው ነገር አልፎአል፤ እነሆ፥ ሁሉም አዲስ ሆኖአል”
        </p>
      </div>

      <div className=" absolute -right-1 bottom-[145px]   sm:bottom-2/20 sm:bg-secondary bg-black bg-opacity-35 sm:bg-opacity-80  md:px-[5%] md:py-5 p-3 border border-r-0  border-white rounded-xl text-white">
        <p className="font-bold text-xl md:text-2xl ">ቄስ ትዕግስቱ ሞገስ</p>
        <p className="font-bold text-xl md:text2xl ">Rev Tigistu Moges</p>
        <p>Ayat Mekaneyesus Church</p>
      </div>

      <div className="bg-primary h-1/6 sm:h-28 sm:absolute sm:bottom-0 sm:z-10">
        <p className="text-white  text-3xl w-96 text-center mx-auto sm:hidden ">
          “ስለዚህ ማንም በክርስቶስ ቢሆን አዲስ ፍጥረት ነው፤ አሮጌው ነገር አልፎአል፤ እነሆ፥ ሁሉም አዲስ ሆኖአል”
        </p>
      </div>
    </div>
  );
}

export default Hero;
