const { default: Image } = require("next/image");

function TeachingCard({ content, logo, onClick }) {
  return (
    <div
      className="flex flex-col p-2 max-w-[600px] gap-3 mt-5"
      onClick={onClick}
    >
      <div>
        <Image
          src={content.thumbnail}
          width={1000}
          height={1000}
          className="rounded-3xl"
          alt="thumbnail"
        />
      </div>

      <div className="flex gap-3 w">
        <div className="w-16 h-16 rounded-full overflow-hidden min-w-[60px] min-h-[60px]">
          <Image
            src={logo}
            width={100}
            height={100}
            className="object-cover w-full h-full"
            alt="thumbnail"
          />
        </div>

        <div className="flex flex-col">
          <p className="font-bold text-[16px] leading-[20px] overflow-hidden whitespace-normal line-clamp-2">
            {content.title}
          </p>
          <p className="opacity-70 text-[16px] leading-[18px] ">
            {content.views} Views .{content.dateOfPost}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeachingCard;
