import Image from "next/image";
import backgroundImage from "../../assets/imags/persona.png";
import style from "./landing.module.css";

function Landing() {
  return (
    <div
      className={`border  relative bg-cover bg-center h-screen w-screen m-t ${style["container"]}`}
    >
      <Image src={backgroundImage} className="w-full h-5/6 sm:hidden " />

      <div className="hidden sm:block p-4 absolute bottom-1/3 md:bottom-1/2 left bg-secondary bg-opacity-50  md:p-10 border border-l-0  border-white rounded-xl ">
        <p className="text-white  text-3xl w-96 text-center mx-auto ">
          “ስለዚህ ማንም በክርስቶስ ቢሆን አዲስ ፍጥረት ነው፤ አሮጌው ነገር አልፎአል፤ እነሆ፥ ሁሉም አዲስ ሆኖአል”
        </p>
      </div>

      <div className=" absolute -right-1 bottom-[145px] flex flex-col justify-center  sm:bottom-2/20 sm:bg-secondary bg-black bg-opacity-35 sm:bg-opacity-80   md:px-10 md:py-10 p-3 border border-r-0  border-white rounded-xl text-white">
        <p className="font-bold text-xl md:text-4xl ">ቄስ ትዕግስቱ ሞገስ</p>
        <p className="font-bold text-xl md:text-4xl">Rev Tigistu Moges</p>
        <p>Ayat Mekaneyesus Church</p>
      </div>

      <div className="bg-primary h-1/6 sm:h-28 sm:absolute sm:bottom-0 sm:z-10">
        <p className="text-white  text-3xl w-96 text-center mx-auto sm:hidden sm:">
          “ስለዚህ ማንም በክርስቶስ ቢሆን አዲስ ፍጥረት ነው፤ አሮጌው ነገር አልፎአል፤ እነሆ፥ ሁሉም አዲስ ሆኖአል”
        </p>
      </div>
    </div>
  );
}

export default Landing;
