import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import sideAnimation from "../assets/Login.json";
import successAnimation from "../assets/LoginSuccess.json";

const SignIn = () => {
  const { singIn, googleUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    singIn(email, password)
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => navigate(from), 1500);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleUser = () => {
    googleUser()
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => navigate(from), 1500);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-accent/50">
      {/* Animation: top on mobile, right on desktop */}
      <div className="w-full md:w-1/2 flex items-center justify-center backdrop-blur-md p-6 order-1 md:order-2">
        <Lottie
          animationData={sideAnimation}
          loop={true}
          className="w-3/4 md:w-4/5"
        />
      </div>

      {/* Sign In Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 order-2 md:order-1">
        <div className="card w-full max-w-md bg-accent/90 shadow-lg rounded-2xl p-8 relative">
          {isSuccess && (
            <div className="absolute inset-0 flex items-center justify-center bg-accent/50 z-50 rounded-2xl">
              <Lottie
                animationData={successAnimation}
                loop={false}
                className="w-48 md:w-64"
              />
            </div>
          )}

          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            Sign In
          </h1>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="flex flex-col">
              <label className="label text-base-content">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full text-base-content"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-base-content">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered input-primary w-full text-base-content"
                required
              />
            </div>

            <a className="link link-hover text-secondary text-sm">
              Forgot password?
            </a>

            <button className="btn btn-primary w-full mt-4">Sign In</button>

            <button
              type="button"
              onClick={handleGoogleUser}
              className="btn btn-outline w-full mt-2 flex justify-center gap-2 items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>
          </form>

          <p className="text-center mt-4 text-base-content">
            Don't have an account?{" "}
            <Link
              to="/signUp"
              className="text-secondary font-medium underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
