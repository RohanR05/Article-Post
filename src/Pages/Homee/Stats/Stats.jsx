import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faThumbsUp,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  const article = useLoaderData();

  const stats = [
    { label: "Articles Posted", value: article.length, icon: faNewspaper },
    { label: "Total Likes", value: 256, icon: faThumbsUp },
    { label: "Total Comments", value: 78, icon: faComment },
  ];

  return (
    <section className="py-8 md:py-12 text-center text-primary">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        📊 Website <span className="text-secondary">Statistics</span>
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-accent rounded-2xl shadow-lg p-6 w-48 md:w-56 hover:shadow-2xl transition-shadow"
          >
            {/* Font Awesome Icon */}
            <div className="text-4xl mb-2 text-primary">
              <FontAwesomeIcon icon={stat.icon} />
            </div>

            {/* Value */}
            <span className="text-3xl font-bold text-secondary">
              {stat.value}
            </span>

            {/* Label */}
            <span className="text-sm font-medium text-primary">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
