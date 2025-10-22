import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faDatabase,
  faGem,
  faFire,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faCss3Alt } from "@fortawesome/free-brands-svg-icons";

const Mission = () => {
  const techStack = [
    { name: "Node.js", icon: faGear },
    { name: "React", icon: faReact },
    { name: "MongoDB", icon: faDatabase },
    { name: "Tailwind CSS", icon: faCss3Alt },
    { name: "DaisyUI", icon: faGem },
    { name: "Firebase", icon: faFire },
    { name: "JWT Security", icon: faKey },
  ];

  return (
    <section className="py-8 md:py-12 px-4 text-center text-primary bg-accent">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        Our <span className="text-secondary">Mission</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed text-info"
      >
        “Empowering voices, protecting privacy, and connecting communities — one
        thoughtful article at a time.”
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl max-w-3xl mx-auto mb-6 text-info leading-relaxed"
      >
        Built with Node.js, React, MongoDB, Tailwind CSS, DaisyUI, JavaScript,
        Firebase, and JWT for a safe and modern social platform.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 text-lg font-semibold mt-6"
      >
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-secondary/10 hover:bg-primary/20 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={tech.icon} className="text-secondary" />
            {tech.name}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Mission;
