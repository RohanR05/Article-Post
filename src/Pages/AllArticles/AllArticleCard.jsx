import { use } from "react";
import ArticleCard from "./ArticleCard";

const AllArticleCard = ({ articlesPromise }) => {
  const article = use(articlesPromise);
  return (
    <div className="m-3 ">
      <p className="text-center my-5 text-2xl font-medium bg-[#394a20] text-white ">All Articles are here!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap gap-4 md:gap-7">
        {article.map((data) => (
          <ArticleCard data={data} key={data._id}></ArticleCard>
        ))}
      </div>
    </div>
  );
};

export default AllArticleCard;