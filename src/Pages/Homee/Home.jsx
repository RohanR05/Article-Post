import Features from "./HomeSections/Features";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import LatestPost from "./LatestPost/LatestPost";
import Stats from "./Stats/Stats";
import Mission from "./Mission/Mission";

const Home = () => {
  return (
    <div className="py-8 md:py-10">
      {/* Banner */}
      <Banner></Banner>

      {/* Categories */}
      <Categories></Categories>

      {/* Latest Articles */}
      <LatestPost></LatestPost>

      {/* Features Section */}
      <Features />

      <Stats></Stats>
      {/* Our Mission */}
      <Mission></Mission>
    </div>
  );
};

export default Home;
