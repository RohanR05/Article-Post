import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentDots,
  faUser,
  faTag,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

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
      setLikes((prev) => prev + 1);
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-screen-xl mx-auto bg-accent text-base-content shadow-xl rounded-2xl overflow-hidden mt-10 p-6 md:p-10"
    >
      {/* Author Section */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-6"
      >
        <img
          src={author_photo}
          alt={author_name}
          className="w-24 h-24 rounded-full border-4 border-primary shadow-md object-cover"
        />
        <p className="mt-3 font-semibold flex items-center gap-2 text-sm text-primary">
          <FontAwesomeIcon icon={faUser} />
          {author_name}
        </p>
      </motion.div>

      {/* Article Content */}
      <div>
        <h1 className="text-3xl font-bold mb-2 text-primary">{title}</h1>
        <p className="text-sm mb-4 opacity-80">
          <FontAwesomeIcon icon={faTag} className="text-secondary" />{" "}
          <span className="font-medium">{category}</span> |{" "}
          <FontAwesomeIcon icon={faCalendarDays} className="text-secondary" />{" "}
          {formattedDate}
        </p>

        <pre className="bg-base-100 p-4 rounded-md text-sm overflow-x-auto whitespace-pre-wrap leading-relaxed text-info">
          <code>{content}</code>
        </pre>

        <ul className="mt-4 space-y-1 text-sm opacity-90">
          <li>
            <strong className="text-primary">Tags:</strong> {tags.join(", ")}
          </li>
        </ul>

        {/* Like Button */}
        <div className="flex items-center gap-2 mt-6 text-neutral">
          <button
            onClick={handleLike}
            disabled={hasLiked}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              hasLiked
                ? "bg-secondary text-neutral cursor-not-allowed"
                : "bg-primary text-neutral hover:opacity-80"
            }`}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>
              {likes} Like{likes !== 1 ? "s" : ""}
            </span>
          </button>
        </div>

        {/* Comment Section */}
        <form onSubmit={handleCommentSubmit} className="mt-6">
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered w-full focus:outline-primary"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-secondary text-neutral mt-3 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faCommentDots} />
            Post Comment
          </button>
        </form>

        {/* Comment List */}
        {comments.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2 text-primary">Comments</h4>
            <div className="max-h-40 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-primary">
              {comments.map((c, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-base-200 p-3 rounded-md border border-base-300"
                >
                  <p className="font-semibold text-sm text-primary">{c.name}</p>
                  <p className="text-sm opacity-90">{c.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CardDertails;
