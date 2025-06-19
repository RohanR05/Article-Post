import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50 dark:bg-cyan-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-cyan-700 dark:text-cyan-300">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 dark:text-cyan-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="px-6 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800 transition duration-200 dark:bg-cyan-600 dark:hover:bg-cyan-500">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
