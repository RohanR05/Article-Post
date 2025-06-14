import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/d0BknRC9/download.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-cyan-50">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Knowledge Seeker</h1>
          <p className="mb-5">
            Knowledge is the understanding and information gained through
            learning or experience. It helps us solve problems, make decisions,
            and grow personally and socially. Sharing knowledge empowers others
            and drives progress in education, science, and everyday life.
          </p>
          <button className="btn bg-cyan-700 text-white">
            <Link to="/allArticles">All Articles</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
