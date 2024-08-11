import ArticleDetail from "./components/ArticleDetail/articleDetaile";
import Biography from "./components/Bio/Biography";
import PhotoCard from "./components/Bio/photoCard";
import ArticleCard from "./components/Card/articleCard";
import Card from "./components/Card/card";
import Article from "./components/Home Content/articles";
import HomeContent1 from "./components/Home Content/home_content";
import HomeContent2 from "./components/Home Content/home_content2";
import Teaching from "./components/Home Content/teaching";
import Landing from "./components/Landing/landing";

export default function Home() {
  return (
    <main>
      <Biography direction={"left"} />
      <Biography direction={"right"} />
    </main>
  );
}
