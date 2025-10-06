import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import CardDertails from "./CardDertails";
import Loading from "../../Components/Loading";
import { motion } from "framer-motion";

const ArticleDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  if (!data) {
    return <Loading />;
  }

  const article = data.find((item) => item._id === id);

  return (
    <div className="min-h-[70vh] p-6 md:p-10">
      {article ? (
        <motion.div
          key={article._id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <CardDertails article={article} currentUser={user} />
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center text-center bg-primary text-primary-content rounded-xl p-10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3">Article Not Found 😕</h2>
          <p className="text-base opacity-80">
            The article you’re looking for doesn’t exist or may have been removed.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ArticleDetails;
