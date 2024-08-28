import getStoryblokClient from "@/service/storyBlokService";
import ArticleCard from "../_components/Card/articleCard";
import TeachingCard from "../_components/Card/teachingCard";
import Article from "../_components/Home Content/articles";
import Teaching from "../_components/Home Content/teaching";

export default async function ArticlesPage() {
  const components = await getStoryblokClient("article");
  return (
    <main className="lg:mx-[160px]">
      <Article
        buttonHidden={true}
        content={components.Articles}
        from="article"
      />
    </main>
  );
}
