import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#394a20] text-white px-4">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-[8rem] md:text-[10rem] font-extrabold">404</h1>

        {/* Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mb-8 text-lg max-w-xl mx-auto opacity-90">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="px-8 py-3 bg-white text-[#394a20] text-lg rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
