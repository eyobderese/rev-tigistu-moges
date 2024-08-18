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
          <p className="font-bold">{content.title}</p>
          <p>{postDate}</p>
        </div>
      </div>
      <Line className="min-h-[2px] min-w-full" />

      {pargraphs.map((pargraph) => {
        return <p className="my-8">{pargraph.text}</p>;
      })}
    </article>
  );
}

export default ArticleDetail;
