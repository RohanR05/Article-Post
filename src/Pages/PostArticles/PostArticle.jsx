import React, { useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";
import { FaPenNib, FaTags, FaImage, FaUser, FaEnvelope, FaBookOpen } from "react-icons/fa";

const PostArticle = () => {
  const { user } = useContext(AuthContext);

  const handlePostArticles = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());

    postData.tags = postData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    postData.publishedAt = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    axios
      .post("https://assignment11-server-side-lyart.vercel.app/articles", postData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Article Posted!",
            text: "Your article has been posted successfully 🎉",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to Post",
          text: "Something went wrong while posting your article.",
        });
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-12 bg-accent text-base-content shadow-lg rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-10 flex justify-center items-center gap-2">
        <FaPenNib /> Post Your Article
      </h2>

      <form
        onSubmit={handlePostArticles}
        className="grid md:grid-cols-2 gap-8 items-start"
      >
        {/* Left Column */}
        <div className="space-y-5">
          <div>
            <label className="label font-semibold">
              <FaBookOpen className="mr-2" /> Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter your article title"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select category</option>
              <option>History</option>
              <option>Science</option>
              <option>Sports</option>
              <option>AI</option>
              <option>Cooking</option>
              <option>Books</option>
              <option>Election</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="label font-semibold">
              <FaTags className="mr-2" /> Tags
            </label>
            <input
              name="tags"
              type="text"
              placeholder="e.g. tech, science, ai"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">
              <FaImage className="mr-2" /> Thumbnail Image URL
            </label>
            <input
              name="author_photo"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          <div>
            <label className="label font-semibold">Content</label>
            <textarea
              name="content"
              placeholder="Write your thoughts..."
              className="textarea textarea-bordered w-full h-40"
              required
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label font-semibold flex items-center gap-2">
                <FaUser /> User Name
              </label>
              <input
                name="author_name"
                type="text"
                value={user?.displayName || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label className="label font-semibold flex items-center gap-2">
                <FaEnvelope /> User Email
              </label>
              <input
                name="email"
                type="email"
                value={user?.email || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary text-neutral w-full mt-4 font-semibold text-lg"
          >
            Publish Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostArticle;
