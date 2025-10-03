import React from "react";
import { useLoaderData } from "react-router";
import HomeArticleCard from "./HomeArticleCard";

const LatestPost = () => {
  const article = useLoaderData();
  return (
    <div>
      {" "}
      <h2 className="text-center my-4 text-2xl font-medium">
        Here are some latest Articles...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 my-10 m-5">
        {[...article]
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          .slice(0, 6)
          .map((data, index) => (
            <HomeArticleCard key={index} data={data} />
          ))}
      </div>
    </div>
  );
};

export default LatestPost;
