import Image from "next/image";
import photo from "@/app/assets/imags/photo1.jpg";

function PhotoCard({ className = "" }) {
  className = `  bg-primary w-[480px] flex   ${className} `;
  return (
    <div className={className}>
      <Image src={photo} width={416} height={278} />
    </div>
  );
}

export default PhotoCard;
