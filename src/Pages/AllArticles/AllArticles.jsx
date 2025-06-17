import AllArticleCard from "./AllArticleCard";


const articlesPromise = fetch("https://assignment11-server-side-lyart.vercel.app/articles").then((res) =>
  res.json()
);

const AllArticles = () => {
  return (
    <div className="md:p-5 lg:p-10">
      <AllArticleCard articlesPromise={articlesPromise}></AllArticleCard>
    </div>
  );
};

export default AllArticles;
