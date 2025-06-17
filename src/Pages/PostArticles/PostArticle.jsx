import React, { use } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";

const PostArticle = () => {
  const { user } = use(AuthContext);

  const handlePostArticles = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const PostArticle = Object.fromEntries(formData.entries());

    PostArticle.tags = PostArticle.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    PostArticle.publishedAt = new Date().toISOString();
    PostArticle.publishedAt = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    console.log(PostArticle);

    axios
      .post("https://assignment11-server-side-lyart.vercel.app/articles", PostArticle)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your article has been post successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-cyan-50 text-cyan-700  shadow-xl shadow-cyan-700 rounded-lg p-6 dark:bg-cyan-700 dark:text-cyan-50">
      <h2 className="text-3xl font-bold text-center mb-6">Post Articles</h2>
      <form onSubmit={handlePostArticles} className="space-y-4">
        <div>
          <label className="label">Title</label>
          <input
            name="title"
            placeholder="Enter title name"
            className="input input-bordered w-full dark:bg-cyan-700"
            required
          />
        </div>

        <div>
          <label className="label">Category</label>
          <select
            name="category"
            className="select select-bordered w-full dark:bg-cyan-700"
            required
          >
            <option value="">Select a category</option>
            <option>History</option>
            <option>Science</option>
            <option>Sports</option>
            <option>Fishing</option>
            <option>AI</option>
            <option>Cooking</option>
            <option>Books</option>
            <option>Election</option>
            <option>Others</option>
          </select>
        </div>

        <div>
          <label className="label">Content</label>
          <textarea
            name="content"
            placeholder="Describe your thoughts"
            className="textarea textarea-bordered w-full dark:bg-cyan-700"
            required
          />
        </div>

        <div>
          <label className="label">Tags</label>
          <input
            name="tags"
            type="text"
            className="input input-bordered w-full dark:bg-cyan-700"
            required
            placeholder="Tags (Separeted by comma)"
          />
        </div>

        <div>
          <label className="label">Thumbnail Image</label>
          <input
            name="author_photo"
            type="text"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full dark:bg-cyan-700"
            required
          />
        </div>

        <div>
          <label className="label">User Name</label>
          <input
            name="author_name"
            type="text"
            className="input input-bordered w-full dark:bg-cyan-700"
            value={user?.displayName || ""}
            readOnly
          />
        </div>

        <div>
          <label className="label">User Email</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full dark:bg-cyan-700"
            value={user?.email || ""}
            readOnly
          />
        </div>

        <button
          type="submit"
          className="btn bg-cyan-700 text-white w-full mt-4"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default PostArticle;
