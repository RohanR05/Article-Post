import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-4">
        <span className="loading loading-ball loading-xs loading-white"></span>
        <span className="loading loading-ball loading-sm loading-white"></span>
        <span className="loading loading-ball loading-md loading-white"></span>
        <span className="loading loading-ball loading-lg loading-white"></span>
        <span className="loading loading-ball loading-xl loading-white"></span>
      </div>
    </div>
  );
};

export default Loading;
