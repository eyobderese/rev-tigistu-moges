import ArticleDetail from "@/app/_components/ArticleDetail/articleDetaile";

export default async function ArticleDetailPage({ params }) {
  const { articleId } = params;

  return (
    <div className="m-3 lg:mx-[160px]">
      <ArticleDetail />
    </div>
  );
}
