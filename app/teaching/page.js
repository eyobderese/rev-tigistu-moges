import getStoryblokClient from "@/service/storyBlokService";
import TeachingCard from "../_components/Card/teachingCard";
import Teaching from "../_components/Home Content/teaching";
import getVideoDetailsFromUrls from "@/service/youtubeAPI";

export default async function TeachingPage() {
  const components = await getStoryblokClient("teaching");
  const content = components.Teaching;
  const videoLinks = content.TeachingVideos;
  const videoUrls = videoLinks.map((video) => video.videoLink.url);
  const details = await getVideoDetailsFromUrls(videoUrls);
  const contents = {
    videoDetails: details,
    logo: content.churchLogo.filename,
    description: content.description,
  };

  return (
    <main className="lg:mx-[160px]">
      <Teaching buttonHidden={true} content={contents} />
    </main>
  );
}
