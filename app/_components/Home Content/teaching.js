import { Children } from "react";
import Line from "../Line/line";
import Button from "../Button/button";
import TeachingCard from "../Card/teachingCard";
import getVideoDetailsFromUrls from "@/service/youtubeAPI";

async function Teaching({ buttonHidden, content }) {
  const videoLinks = content.TeachingVideos;
  const videoUrls = videoLinks.map((video) => video.videoLink.url);
  const videoDetails = await getVideoDetailsFromUrls(videoUrls);

  return (
    <div className="mx-4 my-8">
      <p className="text-2xl font-bold  mx-2">Teachings</p>
      <Line className="md:w-1/2 mx-1  mx-2" />
      <p className="text-lg">{content.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {videoDetails.map((info) => {
          return (
            <TeachingCard
              content={info}
              logo={content.churchLogo.filename}
              key={videoDetails.title}
            />
          );
        })}
      </div>
      {!buttonHidden && (
        <div className="flex justify-center">
          <Button to="/teaching" pageName="Teaching">
            View More Video
          </Button>
        </div>
      )}
    </div>
  );
}

export default Teaching;
