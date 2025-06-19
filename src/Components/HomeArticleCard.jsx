import React from 'react'
import { Link } from 'react-router';

const HomeArticleCard = ({data}) => {
  const { _id,title, author_name,author_photo, publishedAt} = data;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-cyan-50 text-cyan-700 card-xl shadow-lg shadow-cyan-700 dark:bg-cyan-700 dark:text-cyan-50 ">
      <div className="card-body">
        <img className='w-32 h-32 rounded-full border-cyan-700 border bg-cyan-700 text-cyan-50' src={author_photo} alt={author_name} />
        <h2 className="card-title">{author_name}</h2>
        <p>Title: {title}</p>
        <p>Published: {formattedDate}</p>
        <div className="justify-end card-actions">
          <button className="btn text-cyan-50 bg-cyan-700"><Link to={`/cardDetails/${_id}`}>Read More</Link></button>
        </div>
      </div>
    </div>
  );
};


export default HomeArticleCard
