import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const SignUp = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    console.log(name, email, photo, password);

    if (!hasUppercase) {
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one uppercase letter.",
      });
    }

    if (!hasLowercase) {
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one lowercase letter.",
      });
    }

    if (!hasMinLength) {
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must be at least 6 characters long.",
      });
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Account is created",
          showConfirmButton: false,
          timer: 1500,
        });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl shadow-[#394a20] mx-auto my-20  dark:bg-[#394a20] dark:text-white">
      <form onSubmit={handleSignUp} className="card-body text-[#394a20]">
        <fieldset className="fieldset">
          <h1 className="text-5xl font-bold dark:text-white">
            Sign Up Now!
          </h1>

          <label className="label">Name</label>
          <input
            type="text"
            className="input text-[#394a20]"
            placeholder="Name"
            name="name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input text-[#394a20]"
            placeholder="Email"
            name="email"
          />

          <label className="label">Photo</label>
          <input
            type="url"
            className="input text-[#394a20]"
            placeholder="Photo URL"
            name="photo"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input text-[#394a20]"
            placeholder="Password"
            name="password"
          />

          <button className="btn text-[#394a20] bg-white border-[#394a20] mt-4">
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
