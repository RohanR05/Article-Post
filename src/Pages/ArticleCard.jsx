import React from "react";

const ArticleCard = ({ data }) => {
  const { title, author_name, publishedAt } = data;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-cyan-50 text-cyan-700 card-xl shadow-lg shadow-cyan-700">
      <div className="card-body">
        <h2 className="card-title">{author_name}</h2>
        <p>{title}</p>
        <p>Published: {formattedDate}</p>
        <div className="justify-end card-actions">
          <button className="btn text-cyan-50 bg-cyan-700">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
