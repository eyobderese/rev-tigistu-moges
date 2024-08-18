import getStoryblokClient from "@/service/storyBlokService";
import ArticleCard from "./_components/Card/articleCard";
import TeachingCard from "./_components/Card/teachingCard";
import Hero from "./_components/Hero/hero";
import Article from "./_components/Home Content/articles";
import Bio from "./_components/Home Content/bio";
import Message from "./_components/Home Content/message";
import Teaching from "./_components/Home Content/teaching";

export default async function Home() {
  const components = await getStoryblokClient("landing");
  console.log(components);

  return (
    <main>
      <Hero content={components.Hero} />
      <div className="lg:mx-[160px]">
        <Message content={components.Message} />
        <Bio className="sm:flex-row" content={components.Bio} />
        <Teaching content={components.Teaching} />

        <Article content={components.Articles} />
      </div>
    </main>
  );
}
