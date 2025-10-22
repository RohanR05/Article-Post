import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import {
  FaPenNib,
  FaLightbulb,
  FaGlobe,
  FaHeart,
  FaLaptopCode,
  FaCamera,
  FaBookOpen,
  FaMusic,
} from "react-icons/fa";

const Categories = () => {
  const article = useLoaderData();
  const categories = [...new Set(article.map((a) => a.category))];

  // Define icons for each category (fallback: FaBookOpen)
  const getIcon = (category) => {
    const map = {
      writing: <FaPenNib className="text-secondary text-3xl mb-3" />,
      ideas: <FaLightbulb className="text-secondary text-3xl mb-3" />,
      travel: <FaGlobe className="text-secondary text-3xl mb-3" />,
      lifestyle: <FaHeart className="text-secondary text-3xl mb-3" />,
      tech: <FaLaptopCode className="text-secondary text-3xl mb-3" />,
      photography: <FaCamera className="text-secondary text-3xl mb-3" />,
      education: <FaBookOpen className="text-secondary text-3xl mb-3" />,
      music: <FaMusic className="text-secondary text-3xl mb-3" />,
    };
    return map[category.toLowerCase()] || (
      <FaBookOpen className="text-secondary text-3xl mb-3" />
    );
  };

  return (
    <section className="py-12 px-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary"
      >
        Explore <span className="text-secondary">Categories</span>
      </motion.h2>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`category/${category}`}>
              <div
                className="rounded-xl shadow-lg shadow-primary/30 p-6 max-w-sm mx-auto text-primary 
                text-center cursor-pointer bg-accent hover:scale-110 hover:shadow-xl hover:shadow-secondary/40 
                transition-all duration-300 ease-in-out"
              >
                {getIcon(category)}
                <span className="block text-lg font-semibold capitalize">
                  {category}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
