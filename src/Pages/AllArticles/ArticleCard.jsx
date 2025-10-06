import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const ArticleCard = ({ data }) => {
  const { _id, title, author_name, publishedAt, author_photo } = data;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="card bg-base-100 text-base-content shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
    >
      <div className="card-body flex flex-col items-center text-center space-y-4 p-6 bg-accent">
        <motion.img
          src={author_photo}
          alt={`${author_name}'s photo`}
          className="w-24 h-24 rounded-full object-cover border-4 border-primary"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 150 }}
        />

        <h2 className="text-xl font-bold flex items-center gap-2 text-primary">
          <FaUser /> {author_name}
        </h2>

        <p className="text-lg font-medium text-secondary">
          {title.length > 45 ? title.slice(0, 45) + "..." : title}
        </p>

        <p className="flex items-center gap-2 text-sm opacity-70">
          <FaCalendarAlt /> {formattedDate}
        </p>

        <Link
          to={`/cardDetails/${_id}`}
          className="btn btn-primary text-base-100 w-full mt-2 flex items-center justify-center gap-2"
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
