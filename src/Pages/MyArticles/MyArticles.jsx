import React, { Suspense, use } from "react";
import { motion } from "framer-motion";
import MyArticlesList from "./MyArticlesList";
import { myArticlesAPI } from "../../API/MyArticlesAPI";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../../Components/Loading";

const MyArticles = () => {
  const { user } = use(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="my-12 rounded-xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-2xl md:text-4xl font-bold text-primary my-6"
      >
        My Posted <span className="text-secondary">Articles</span>
      </motion.h2>

      <Suspense fallback={<Loading></Loading>}>
        <MyArticlesList myArticles={myArticlesAPI(user?.email)} />
      </Suspense>
    </motion.div>
  );
};

export default MyArticles;
