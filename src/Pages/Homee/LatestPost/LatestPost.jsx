import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import HomeArticleCard from "./HomeArticleCard";

const LatestPost = () => {
  const article = useLoaderData();
  const latestArticles = [...article]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 6);

  return (
    <section className="py-12 px-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-bold text-primary mb-8"
      >
        Latest <span className="text-secondary">Articles</span>
      </motion.h2>

      {/* Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mx-auto"
      >
        {latestArticles.map((data, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <HomeArticleCard data={data} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LatestPost;
