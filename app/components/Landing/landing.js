import Image from "next/image";
import backgroundImage from "../../assets/imags/persona.png";
import style from "./landing.module.css";

function Landing() {
  return (
    <div
      className={`relative bg-cover bg-center h-screen w-screen m-t ${style["container"]}`}
    >
      <Image src={backgroundImage} className="w-screen h-4/6 sm:hidden" />

      <div className="bg-primary p-4 sm:absolute sm:bottom-1/3 md:bottom-1/2 left sm:bg-secondary sm:bg-opacity-50  md:p-10 sm:border sm:border-l-0  sm:border-white sm:rounded-xl ">
        <p className="text-white  text-3xl w-96 text-center mx-auto ">
          “ስለዚህ ማንም በክርስቶስ ቢሆን አዲስ ፍጥረት ነው፤ አሮጌው ነገር አልፎአል፤ እነሆ፥ ሁሉም አዲስ ሆኖአል”
        </p>
      </div>

      <div className=" absolute right-1 bottom-7/20 sm:bottom-4/20 sm:bg-secondary bg-black bg-opacity-35 sm:bg-opacity-80   px-10 py-10 border border-r-0  border-white rounded-xl text-white">
        <p className="font-bold text-4xl">ቄስ ትዕግስቱ ሞገስ</p>
        <p className="font-bold text-4xl">Rev Tigistu Moges</p>
        <p>Ayat Mekaneyesus Church</p>
      </div>
    </div>
  );
}

export default Landing;
