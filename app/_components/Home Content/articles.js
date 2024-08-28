import Button from "../Button/button";
import ArticleCard from "../Card/articleCard";
import Line from "../Line/line";

function Article({ children, buttonHidden, content }) {
  const articles = content.ArticlesCard;
  console.log(articles);
  return (
    <div className="mx-4 my-8">
      <p className="text-[24px] leading-[27.84px] md:text-[30px] md:leading-[34.8px]  lg:text-[36px] lg:leading-[41.76px] font-bold align-middle ">
        Articles
      </p>
      <Line className="md:w-1/2 mx-2" />
      <p className="my-5 text-[16px] leading-[16.32px] md:text-[17px] md:leading-[23.8px]">
        {content.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((articleContent) => {
          return (
            <ArticleCard content={articleContent} key={articleContent._uid} />
          );
        })}
      </div>
      <div className="flex justify-center">
        {!buttonHidden && (
          <Button to="/article" pageName="Article">
            View More Articles
          </Button>
        )}
      </div>
    </div>
  );
}

export default Article;
