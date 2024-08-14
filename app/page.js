import ArticleCard from "./_components/Card/articleCard";
import TeachingCard from "./_components/Card/teachingCard";
import Hero from "./_components/Hero/hero";
import Article from "./_components/Home Content/articles";
import Bio from "./_components/Home Content/bio";
import Message from "./_components/Home Content/message";
import Teaching from "./_components/Home Content/teaching";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="lg:mx-[160px]">
        <Message />
        <Bio className="sm:flex-row" />
        <Teaching>
          <TeachingCard />
          <TeachingCard />
          <TeachingCard />
          <TeachingCard />
        </Teaching>
        <Article>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Article>
      </div>
    </main>
  );
}
