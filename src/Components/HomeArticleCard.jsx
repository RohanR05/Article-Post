import React from "react";
import { Link } from "react-router";

const HomeArticleCard = ({ data }) => {
  const { _id, title, author_name, author_photo, publishedAt } = data;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-white text-[#394a20] card-xl shadow-lg shadow-[#394a20] dark:bg-[#394a20] dark:text-white ">
      <div className="card-body">
        <img
          className="w-32 h-32 rounded-full border  border-[#394a2070] text-white"
          src={author_photo}
          alt={author_name}
        />
        <h2 className="card-title">{author_name}</h2>
        <p>Title: {title}</p>
        <p>Published: {formattedDate}</p>
        <div className="justify-end card-actions">
          <button className="btn text-white bg-[#394a20]">
            <Link to={`/cardDetails/${_id}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeArticleCard;
