import Button from "../Button/button";
import ArticleCard from "../Card/articleCard";
import Line from "../Line/line";

function Article({ children, buttonHidden, content }) {
  const articles = content.ArticlesCard;
  console.log(articles);
  return (
    <div className="mx-4 my-8">
      <p className="text-2xl font-bold mx-2">Articles</p>
      <Line className="md:w-1/2 mx-2" />
      <p className="text-lg">{content.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((articleContent) => {
          return <ArticleCard content={articleContent} />;
        })}
      </div>
      <div className="flex justify-center">
        {!buttonHidden && <Button to="/article">View More Articles</Button>}
      </div>
    </div>
  );
}

export default Article;
