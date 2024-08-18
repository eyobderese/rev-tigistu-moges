import getStoryblokClient from "@/service/storyBlokService";
import TeachingCard from "../_components/Card/teachingCard";
import Teaching from "../_components/Home Content/teaching";

export default async function TeachingPage() {
  const components = await getStoryblokClient("teaching");
  return (
    <main className="lg:mx-[160px]">
      <Teaching buttonHidden={true} content={components.Teaching} />
    </main>
  );
}
