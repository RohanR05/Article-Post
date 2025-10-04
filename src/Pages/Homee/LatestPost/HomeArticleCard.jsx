import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const HomeArticleCard = ({ data }) => {
  const { _id, title, author_name, author_photo, publishedAt } = data;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="card bg-accent shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl h-full"
    >
      <div className="card-body flex flex-col items-center text-center p-6 h-full">
        {/* Author Photo */}
        <img
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-primary shadow-sm object-cover"
          src={author_photo}
          alt={author_name}
        />

        {/* Author */}
        <h2 className="card-title mt-3 text-lg font-semibold text-primary">
          {author_name}
        </h2>

        {/* Article Title */}
        <p className="mt-2 text-sm md:text-base font-medium text-secondary line-clamp-2">
          {title}
        </p>

        {/* Date */}
        <p className="text-xs opacity-80 mb-4">
          Published: {formattedDate}
        </p>

        {/* Button (sticks at bottom) */}
        <div className="card-actions mt-auto">
          <Link to={`/cardDetails/${_id}`}>
            <button className="btn btn-sm btn-primary btn-outline hover:text-accent transition-colors duration-300">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeArticleCard;
