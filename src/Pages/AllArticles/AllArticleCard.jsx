import { use } from "react";
import ArticleCard from "./ArticleCard";

const AllArticleCard = ({ articlesPromise }) => {
  const article = use(articlesPromise);
  console.log(article);
  return (
    <div className="m-3">
      <p className="text-center my-5 text-2xl font-medium bg-cyan-700 text-white ">All Articles are here!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap gap-10">
        {article.map((data) => (
          <ArticleCard data={data} key={data._id}></ArticleCard>
        ))}
      </div>
    </div>
  );
};

export default AllArticleCard;
