import ArticleOne from "../Components/ArticleOne";
import Essential from "../Components/Essential";
import HomeBanner from "../Components/HomeBanner";
import Offers from "../Components/Offers";
import Partners from "../Components/Partners";
import TopStories from "../Components/TopStories";

function Home() {
  return (
    <>
      <HomeBanner />
      <ArticleOne />
      <Offers />
      <Essential />
      <TopStories />
      <Partners />
    </>
  );
}

export default Home;
