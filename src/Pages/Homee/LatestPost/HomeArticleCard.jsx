import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaUser, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

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
      className="card bg-accent shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-secondary/40 transition-shadow duration-300 rounded-xl h-full"
    >
      <div className="card-body flex flex-col items-center text-center p-6 h-full">
        {/* Author Photo */}
        <img
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-primary shadow-sm object-cover"
          src={author_photo}
          alt={author_name}
        />

        {/* Author with Icon */}
        <div className="flex items-center gap-2 mt-3 text-info font-semibold text-lg">
          <FaUser className="text-secondary" />
          <span>{author_name}</span>
        </div>

        {/* Article Title with Icon */}
        <div className="flex items-center gap-2 mt-2 text-info line-clamp-2 text-sm md:text-base font-medium">
          <FaBookOpen className="text-secondary" />
          <p>{title}</p>
        </div>

        {/* Date with Icon */}
        <div className="flex items-center gap-2 text-xs opacity-80 mt-2 mb-4">
          <FaCalendarAlt className="text-secondary" />
          <span>Published: {formattedDate}</span>
        </div>

        {/* Button (sticks at bottom) */}
        <div className="card-actions mt-auto">
          <Link to={`/cardDetails/${_id}`}>
            <button className=" btn btn-sm btn-secondary btn-outline transition-colors duration-300">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeArticleCard;
