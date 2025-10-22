import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaPhotoVideo, FaLock } from "react-icons/fa";
import Lottie from "lottie-react";
import successAnimation from "../assets/LoginSuccess.json";

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
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 relative">
        {isSuccess && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-50 rounded-2xl">
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
          {/* Name */}
          <div className="flex items-center border-b border-secondary/30 py-2">
            <FaUser className="text-secondary mr-3 w-5 h-5" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full outline-none text-info placeholder-info"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-b border-secondary/30 py-2">
            <FaEnvelope className="text-secondary mr-3 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none text-info placeholder-info"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="flex items-center border-b border-secondary/30 py-2">
            <FaPhotoVideo className="text-secondary mr-3 w-5 h-5" />
            <input
              type="url"
              name="photo"
              placeholder="Profile Photo URL"
              className="w-full outline-none text-info placeholder-info"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b border-secondary/30 py-2">
            <FaLock className="text-secondary mr-3 w-5 h-5" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none text-info placeholder-info"
              required
            />
          </div>

          <button className="btn btn-secondary w-full mt-4">Sign Up</button>
        </form>

        <p className="text-center mt-4 text-info">
          Already have an account?{" "}
          <Link to="/signIn" className="text-primary font-semibold underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
