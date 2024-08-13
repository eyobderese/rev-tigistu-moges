import Button from "../Button/button";
import Line from "../Line/line";

function Article({ children }) {
  return (
    <div className="mx-4 my-8">
      <p className="text-2xl font-bold">Articles</p>
      <Line className="md:w-1/2 mx-1" />
      <p className="text-lg">
        As you begin the steps to selling, learn what to expect with our Sellers
        Guide
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
      <div className="flex justify-center">
        <Button to="/article">View More Articles</Button>
      </div>
    </div>
  );
}

export default Article;
