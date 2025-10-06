import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

const AllArticleCard = ({ articles }) => {
  return (
    <div className="m-3">
      <p className="text-center my-5 text-2xl font-medium bg-primary text-primary-content py-2 rounded-md shadow">
        All Articles are here!
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7"
      >
        {articles.map((data) => (
          <motion.div
            key={data._id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArticleCard data={data} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllArticleCard;
