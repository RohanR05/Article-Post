import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/404Light.json";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-accent px-4">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-primary backdrop-blur-md z-0"></div>

      {/* Lottie Animation */}
      <div className="relative z-10 w-96 md:w-[600px]">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>

      {/* Text Section */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-6 text-lg max-w-lg mx-auto opacity-80">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back Button */}
        <Link to="/">
          <button className="px-8 py-3 bg-secondary text-secondary-content rounded-full shadow-lg hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
