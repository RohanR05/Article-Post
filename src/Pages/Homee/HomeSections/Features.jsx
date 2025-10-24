import React from "react";
import { motion } from "framer-motion";
import {
  PencilSquareIcon,
  PhotoIcon,
  TagIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const Features = () => {
  const features = [
    {
      title: "Post Your Own Articles",
      description:
        "Write and share your thoughts with the world through our easy-to-use posting system.",
      icon: PencilSquareIcon,
      gradient:
        "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
    },
    {
      title: "Add Images to Your Articles",
      description:
        "Make your content visually appealing by attaching images to your posts.",
      icon: PhotoIcon,
      gradient:
        "linear-gradient(90deg, var(--color-secondary), var(--color-info))",
    },
    {
      title: "Use Tags for Better Reach",
      description:
        "Add tags to help readers find and explore your articles based on topics they love.",
      icon: TagIcon,
      gradient:
        "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
    },
    {
      title: "Secure Authentication",
      description:
        "Enjoy a safe and secure experience with Firebase Authentication and JWT protection.",
      icon: ShieldCheckIcon,
      gradient:
        "linear-gradient(90deg, var(--color-secondary), var(--color-primary))",
    },
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-primary mb-4"
        >
          Platform <span className="text-secondary">Features</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-info mb-12 max-w-2xl mx-auto"
        >
          Everything you need to share your ideas and connect with readers.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="rounded-2xl shadow-lg shadow-primary/40 p-6 transform transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/50"
                style={{
                  background: "var(--color-accent)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{
                    background: feature.gradient,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  }}
                >
                  <Icon className="h-8 w-8 text-neutral" />
                </motion.div>

                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-info">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
