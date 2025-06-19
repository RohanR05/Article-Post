import React from "react";
import { Link, useLoaderData } from "react-router";
import HomeArticleCard from "./HomeArticleCard";
const Home = () => {
  const article = useLoaderData();
  console.log(article);

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/d0BknRC9/download.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-cyan-50">
          <div className="max-w-md  md:py-10">
            <h1 className="mb-5 text-5xl font-bold">Hello Knowledge Seeker!</h1>
            <p className="mb-5">
              Knowledge is the understanding and information gained through
              learning or experience. It helps us solve problems, make
              decisions, and grow personally and socially. Sharing knowledge
              empowers others and drives progress in education, science, and
              everyday life.
            </p>

            <button className="btn bg-cyan-700 text-white">
              <Link to="/allArticles">All Articles</Link>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-center my-4 text-2xl font-medium">
        Here are some latest Articles...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10 m-5">
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

export default Home;
