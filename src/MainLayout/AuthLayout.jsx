import React from "react";
import { Outlet, Link } from "react-router";
import Lottie from "lottie-react";
import bannerAnimation from "../assets/Login.json";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="flex flex-col md:flex-row items-center w-full bg-accent rounded-2xl shadow-xl shadow-primary/50 overflow-hidden md:gap-8">
        {/* Animation Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          {/* Back to Home Button */}
          <div className="self-start mb-4 md:mb-6">
            <Link to="/">
              <button className="btn btn-outline btn-secondary px-4 py-2 rounded-lg text-sm">
                Back to Home
              </button>
            </Link>
          </div>

          <Lottie
            animationData={bannerAnimation}
            loop
            autoplay
            className="w-3/4 md:w-full max-h-[350px] md:max-h-[500px]"
          />
        </div>

        {/* Content/Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 -mt-48 md:mt-0">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
