import ArticleOne from "../Components/ArticleOne";
import BannerCommon from "../Components/BannerCommon";
import Essential from "../Components/Essential";
import Partners from "../Components/Partners";
import TopStories from "../Components/TopStories";

function About() {
  return (
    <>
      <BannerCommon heading="About Us" />
      <ArticleOne />
      <Essential />
      <TopStories />
      <Partners />
    </>
  );
}

export default About;
