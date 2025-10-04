import { useLoaderData, useParams } from "react-router";
import HomeArticleCard from "../LatestPost/HomeArticleCard";

const CategoryArticles = () => {
  const articles = useLoaderData();
  const { categoryName } = useParams();

  const filtered = articles.filter((item) => item.category === categoryName);

  return (
    <div className="my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#394a20] dark:bg-white">
        Articles in "{categoryName}"
      </h2>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((data, index) => (
            <HomeArticleCard key={index} data={data} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-cyan-200">
          No articles found in this category.
        </p>
      )}
    </div>
  );
};

export default CategoryArticles;