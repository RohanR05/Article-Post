import { motion } from "framer-motion";
import Features from "./HomeSections/Features";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import LatestPost from "./LatestPost/LatestPost";
import Stats from "./Stats/Stats";
import Mission from "./Mission/Mission";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div className="py-8 md:py-10">
      {/* Banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Banner />
      </motion.div>

      {/* Categories */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Categories />
      </motion.div>

      {/* Latest Articles */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <LatestPost />
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Features />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Stats />
      </motion.div>

      {/* Our Mission */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Mission />
      </motion.div>
    </div>
  );
};

export default Home;
