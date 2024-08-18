import ArticleDetail from "@/app/_components/ArticleDetail/articleDetaile";
import getStoryblokClient from "@/service/storyBlokService";

export default async function ArticleDetailPage({ params }) {
  const components = await getStoryblokClient("landing");
  const articls = components.Articles.ArticlesCard;
  const { articleId } = params;

  // filtter the specific article using the articleId I need the specific article not an array

  const article = articls.filter((article) => article._uid === articleId);

  return (
    <div className="m-3 lg:mx-[160px]">
      <ArticleDetail content={article[0]} />
    </div>
  );
}
