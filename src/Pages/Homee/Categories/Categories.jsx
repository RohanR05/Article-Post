import React from "react";
import { Link, useLoaderData } from "react-router";

const Categories = () => {
  const article = useLoaderData();
  const categories = [...new Set(article.map((a) => a.category))];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-10">Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, idx) => (
          <Link to={`category/${category}`} key={idx}>
            <button className="px-4 py-2 bg-[#394a20] text-white rounded-full hover:bg-[#90b855]">
              {category}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
