import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import HomeArticleCard from "./HomeArticleCard";
import { AuthContext } from "../Provider/AuthContext";
import img from "../assets/Green Minimalist Summer Big Sale Medium Banner.png";

const Home = () => {
  const article = useLoaderData();
  const { user } = use(AuthContext);

  const categories = [...new Set(article.map((a) => a.category))];

  return (
    <div>
      {/* <div
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
      </div>{" "} */}
      <img src={img} />
      {user && (
        <>
          {" "}
          <div>
            <div className="my-10 text-center">
              <h2 className="text-2xl font-semibold mb-4">Categories</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, idx) => (
                  <Link to={`category/${category}`} key={idx}>
                    {" "}
                    <button className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full border border-cyan-300 hover:bg-cyan-200 dark:bg-cyan-700 dark:text-cyan-50 dark:border-cyan-500">
                      {category}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center my-4 text-2xl font-medium">
              Here are some latest Articles...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10 m-5">
              {[...article]
                .sort(
                  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
                )
                .slice(0, 6)
                .map((data, index) => (
                  <HomeArticleCard key={index} data={data} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
