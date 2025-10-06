import React, { use } from "react";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import Loading from '../../Components/Loading'

const AllArticleCard = ({ articlesPromise }) => {
  let articles;

  try {
    articles = use(articlesPromise);
  } catch {
    return <Loading />;
  }

  return (
    <div className="m-5">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center my-8 text-3xl font-bold bg-primary text-neutral py-3 rounded-lg shadow-md"
      >
        📰 All Articles Are Here!
      </motion.h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {articles.length > 0 ? (
          articles.map((data) => (
            <motion.div
              key={data._id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3 }}
            >
              <ArticleCard data={data} />
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-lg font-medium text-base-content/70"
          >
            No articles available yet.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default AllArticleCard;
