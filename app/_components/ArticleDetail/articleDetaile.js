import Line from "../Line/line";
import articleImage from "@/app/assets/imags/articleImage.jpg";
import formatDate from "@/service/formatDate";
import Image from "next/image";

function ArticleDetail({ content }) {
  const postDate = formatDate(content.postDate);
  const pargraphs = content.teachingContent;
  return (
    <article className="flex flex-col gap-2 mx-4 lg:mx-12">
      <div className="relative max-h-[530px] bg-black  flex items-center overflow-hidden">
        <Image
          src={content.thumbnail.filename}
          width={1000}
          height={1000}
          className="w-full h-full  object-fill opacity-40"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <p className="font-bold text-[30px] leading-[43px] md:text[66px] md:leading-[92.4px] ">
            {content.title}
          </p>
          <p className="text-[14px] leading-[15.3px] lg:text-[16px] lg:leading-[18.24px]">
            {postDate}
          </p>
        </div>
      </div>
      <Line className="min-h-[2px] min-w-full" />

      {pargraphs.map((pargraph) => {
        return (
          <p className="my-8 text-[16px] leading-[25.68px] md:text-[19px] md:leading-[30px] lg:text-[23px] lg:leading-[37px]">
            {pargraph.text}
          </p>
        );
      })}
    </article>
  );
}

export default ArticleDetail;
