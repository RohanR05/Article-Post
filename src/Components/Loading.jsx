import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/LoadingBouncingball.json"; // adjust path if needed

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-[9999]">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-48 md:w-64"
      />
    </div>
  );
};

export default Loading;
