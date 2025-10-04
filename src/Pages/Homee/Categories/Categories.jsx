import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";

const Categories = () => {
  const article = useLoaderData();
  const categories = [...new Set(article.map((a) => a.category))];

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
                className="rounded-xl shadow-lg shadow-info/30 p-6 max-w-sm mx-auto text-primary 
                text-center cursor-pointer bg-accent hover:scale-110 hover:shadow-xl 
                transition-all duration-300 ease-in-out"
              >
                <span className="block text-xl font-medium">{category}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
