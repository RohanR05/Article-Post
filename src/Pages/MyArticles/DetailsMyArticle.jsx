import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";

const DetailsMyArticle = () => {
  const details = useLoaderData();
  const {
    title,
    category,
    content,
    tags,
    author_photo,
    author_name,
    email,
    publishedAt,
  } = details;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto my-8 p-6 sm:p-8 bg-accent shadow-lg rounded-2xl border border-primary"
    >
      {/* Author Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6"
      >
        <img
          src={author_photo}
          alt={author_name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-secondary">{author_name}</h2>
          <p className="text-sm text-primary">{email}</p>
        </div>
      </motion.div>

      {/* Title & Meta */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-3 leading-snug text-primary">{title}</h1>
        <p className="text-sm mb-6">
          <span className="font-medium">Category:</span> {category} •{" "}
          <span className="italic">{publishedAt}</span>
        </p>
      </motion.div>

      {/* Content */}
      <motion.pre
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-neutral border-primary text-primary p-4 rounded-lg text-sm overflow-x-auto border"
      >
        <code>{content}</code>
      </motion.pre>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2"
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 rounded-full text-xs font-medium bg-secondary/20 text-primary shadow-sm transition hover:scale-105 duration-200"
          >
            #{tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DetailsMyArticle;
