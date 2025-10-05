import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import sideAnimation from "../assets/Login.json"; // side/top animation
import successAnimation from "../assets/LoginSuccess.json"; // success animation

const SignUp = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase)
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one uppercase letter.",
      });
    if (!hasLowercase)
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one lowercase letter.",
      });
    if (!hasMinLength)
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must be at least 6 characters long.",
      });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => setUser({ ...user, displayName: name, photoURL: photo }))
          .catch(() => setUser(user));

        setIsSuccess(true);
        setTimeout(() => navigate("/"), 1500);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-accent/50">
      {/* Animation */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 order-1 md:order-2 backdrop-blur-md">
        <Lottie
          animationData={sideAnimation}
          loop={true}
          className="w-3/4 md:w-4/5"
        />
      </div>

      {/* Sign Up Form */}
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
            Sign Up
          </h1>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex flex-col">
              <label className="label text-base-content">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered input-primary w-full text-base-content"
                required
              />
            </div>

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
              <label className="label text-base-content">Photo URL</label>
              <input
                type="url"
                name="photo"
                placeholder="Profile Photo URL"
                className="input input-bordered input-primary w-full text-base-content"
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

            <button className="btn btn-primary text-neutral w-full mt-4">Sign Up</button>
          </form>

          <p className="text-center mt-4 text-base-content">
            Already have an account?{" "}
            <Link to="/signIn" className="text-secondary font-medium underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
