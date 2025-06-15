import React from "react";
import AllArticleCard from "./AllArticleCard";

const articlesPromise = fetch("http://localhost:222/articles").then((res) =>
  res.json()
);

const AllArticles = () => {
  return <AllArticleCard articlesPromise={articlesPromise}></AllArticleCard>;
};

export default AllArticles;
