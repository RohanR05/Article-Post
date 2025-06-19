import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";

const CardDertails = ({ article, currentUser }) => {
  const {
    _id,
    title,
    content,
    category,
    tags,
    author_name,
    author_photo,
    publishedAt,
  } = article;

  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
    if (likedPosts.includes(_id)) {
      setHasLiked(true);
      setLikes(1);
    }
  }, [_id]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(1);
      setHasLiked(true);
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
      likedPosts.push(_id);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && currentUser?.displayName) {
      const newComment = {
        name: currentUser.displayName,
        text: comment.trim(),
      };
      setComments((prev) => [newComment, ...prev]);
      setComment("");
    }
  };

  return (
    <div className=" max-w-screen-lg mx-auto bg-cyan-50  text-cyan-700 dark:bg-cyan-700 dark:text-cyan-50 shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="flex justify-center mt-4">
        <img
          src={author_photo}
          alt={author_name}
          className="w-24 h-24 object-cover rounded-full border-2 border-cyan-700"
        />
      </div>
      
      <div className="p-6 dark:bg-cyan-700 dark:text-cyan-50">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-600 mb-4 dark:text-cyan-50">
          Category: <span className="font-medium">{category}</span> |{" "}
          {publishedAt}
        </p>
        <pre className="bg-gray-100 p-4  dark:bg-cyan-600 rounded-md text-sm overflow-x-auto ">
          <code className="dark:text-cyan-50">{content}</code>
        </pre>

        <ul className="mb-4 text-gray-600 space-y-1 dark:text-cyan-50">
          {author_name && (
            <li>
              <strong>Posted By:</strong> {author_name}
            </li>
          )}
          <li>
            <strong>Tags:</strong> {tags.join(", ")}
          </li>
          <li>
            <strong>Published Date:</strong> {formattedDate}
          </li>
        </ul>

        {/* Like Button */}
        <div className="flex items-center gap-2 mt-4 dark:text-cyan-50">
          <button
            onClick={handleLike}
            disabled={hasLiked}
            className="flex items-center gap-1"
          >
            <FcLike size={26} />
            <span className="text-gray-700 dark:text-cyan-50">
              {likes} Like{likes !== 1 ? "s" : ""}
            </span>
          </button>
        </div>

        {/* Comment Input */}
        <form
          onSubmit={handleCommentSubmit}
          className="mt-6 space-y-2 dark:bg-cyan-700 dark:text-cyan-50"
        >
          <textarea
            className="w-full border border-cyan-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="dark:bg-cyan-50 bg-cyan-700 text-white px-4 py-2 rounded hover:opacity-60  dark:text-cyan-700"
          >
            Post Comment
          </button>
        </form>

        {/* Scrollable for Remaining Comments */}
        {comments.length > 0 && (
          <div className="mt-4 dark:text-cyan-50">
            <h4 className="text-sm font-medium text-gray-600 mb-1 dark:text-cyan-50">
              Comments:
            </h4>
            <div className="max-h-40 overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-cyan-400">
              {comments.map((c, index) => (
                <div
                  key={index}
                  className="bg-cyan-100 p-2 rounded text-gray-800 border border-cyan-200"
                >
                  <p className="font-semibold text-sm text-cyan-800">
                    {c.name}
                  </p>
                  <p className="text-sm">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDertails;
