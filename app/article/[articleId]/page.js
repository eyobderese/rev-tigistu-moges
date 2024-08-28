import ArticleDetail from "@/app/_components/ArticleDetail/articleDetaile";
import getStoryblokClient from "@/service/storyBlokService";

export default async function Page({ params }) {
  console.log("params", params);
  const [component, articleId] = params.articleId.split("_");
  console.log("component", component);
  console.log("articleId", articleId);

  const components = await getStoryblokClient(component || "article");

  const articls = components.Articles.ArticlesCard;

  // filtter the specific article using the articleId I need the specific article not an array

  const article = articls.filter((article) => article._uid === articleId);

  return (
    <div className="m-3 lg:mx-[160px]">
      <ArticleDetail content={article[0]} />
    </div>
  );
}
