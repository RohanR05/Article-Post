import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // each child animates one after another
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6, // slower and smoother
      ease: "easeOut",
    },
  },
};

const AllArticleCard = ({ articles }) => {
  return (
    <div className="m-3">
      <p className="text-center my-5 text-2xl font-medium bg-primary text-primary-content py-2 rounded-md shadow">
        All Articles are here!
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7"
      >
        {articles.map((data) => (
          <motion.div key={data._id} variants={cardVariants}>
            <ArticleCard data={data} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllArticleCard;
