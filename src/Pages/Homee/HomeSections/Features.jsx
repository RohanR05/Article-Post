import React from "react";
import { PencilSquareIcon, PhotoIcon, TagIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const Features = () => {
  const features = [
    {
      title: "Post Your Own Articles",
      description: "Write and share your thoughts with the world through our easy-to-use posting system.",
      icon: PencilSquareIcon,
    },
    {
      title: "Add Images to Your Articles",
      description: "Make your content visually appealing by attaching images to your posts.",
      icon: PhotoIcon,
    },
    {
      title: "Use Tags for Better Reach",
      description: "Add tags to help readers find and explore your articles based on topics they love.",
      icon: TagIcon,
    },
    {
      title: "Secure Authentication",
      description: "Enjoy a safe and secure experience with Firebase Authentication and JWT protection.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Platform Features</h2>
        <p className="text-gray-600 mb-12">
          Everything you need to share your ideas and connect with readers.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <feature.icon className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
