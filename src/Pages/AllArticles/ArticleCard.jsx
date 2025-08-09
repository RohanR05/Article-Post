import { Link } from "react-router";

const ArticleCard = ({ data }) => {
  const { _id, title, author_name, publishedAt, author_photo } = data;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-white text-[#394a20] card-xl shadow-lg shadow-[#394a20] dark:bg-[#394a20] dark:text-cyan-50
                    max-w-md mx-auto p-4 rounded-lg">
      <div className="card-body flex flex-col items-center text-center space-y-4">
        <h2 className="card-title text-xl font-semibold">{author_name}</h2>
        <img
          src={author_photo}
          alt={`${author_name}'s photo`}
          className="w-24 h-24 rounded-full object-cover"
        />
        <p className="font-medium">Title: {title}</p>
        <p className="text-sm text-gray-600 dark:text-cyan-200">Published: {formattedDate}</p>
        <div className="justify-end card-actions w-full">
          <button className="btn text-cyan-50 bg-[#394a20] w-full hover:bg-[#2e3a13] transition-colors">
            <Link to={`/cardDetails/${_id}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
