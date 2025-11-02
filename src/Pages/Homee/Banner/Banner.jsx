import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaPenNib, FaGlobe, FaUsers } from "react-icons/fa";
import animi from '../../../assets/article.json'
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <section
      data-aos="zoom-out"
      data-aos-duration="1500"
      className="w-full bg-secondary/20 rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-16 gap-8 overflow-hidden"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left space-y-5"
      >
        <div className="flex items-center justify-center md:justify-start gap-3 text-secondary text-2xl">
          <FaPenNib />
          <FaGlobe />
          <FaUsers />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-primary">
          Share Your Voice with the World
        </h1>

        <p className="text-base md:text-lg text-secondary max-w-md mx-auto md:mx-0">
          Write articles, express ideas, and inspire others in a community built
          for thinkers and creators like you.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary text-neutral font-semibold mt-4"
        >
          <NavLink to={"/postArticles"}>Start Writing</NavLink>
        </motion.button>
      </motion.div>

      {/* Animation Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <Lottie
          animationData={animi}
          loop
          autoplay
          className="w-full max-w-[400px] md:max-w-[500px]"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
