import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const { singIn, googleUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    singIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed In",
          text: "You have successfully signed in!",
          timer: 1200,
          showConfirmButton: false,
        });
        setTimeout(() => navigate(from), 1200);
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
        Swal.fire({
          icon: "success",
          title: "Logged In",
          text: "Google login successful!",
          timer: 1200,
          showConfirmButton: false,
        });
        setTimeout(() => navigate(from), 1200);
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
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="card w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Sign In
        </h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email */}
          <div className="flex items-center border-b border-secondary/30 py-2">
            <FaEnvelope className="text-secondary mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none text-info placeholder-info"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b border-secondary/30 py-2">
            <FaLock className="text-secondary mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none text-info placeholder-info"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link className="text-secondary text-sm hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Buttons */}
          <button className="btn btn-secondary w-full mt-2">Sign In</button>

          <button
            type="button"
            onClick={handleGoogleUser}
            className="btn btn-outline btn-secondary w-full mt-2 flex justify-center items-center gap-2"
          >
            <FaGoogle />
            Login with Google
          </button>
        </form>

        <p className="text-center mt-4 text-info">
          Don't have an account?{" "}
          <Link
            to="/signUp"
            className="text-primary font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
