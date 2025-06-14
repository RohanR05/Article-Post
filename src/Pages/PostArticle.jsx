import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";

const PostArticle = () => {
  const { user } = use(AuthContext);

  const handlePostArticles = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const PostArticle = Object.fromEntries(formData.entries());
    console.log(PostArticle);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-cyan-50 text-cyan-700  shadow-xl shadow-cyan-700 rounded-lg p-6 dark:bg-[#3d365c] dark:text-black">
      <h2 className="text-3xl font-bold text-center mb-6">Post Articles</h2>
      <form onSubmit={handlePostArticles} className="space-y-4">
        <div>
          <label className="label">Title</label>
          <input
            name="groupName"
            placeholder="Enter title name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Content</label>
          <textarea
            name="description"
            placeholder="Describe your thoughts"
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
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
          <label className="label">Date</label>
          <input
            name="startDate"
            type="date"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Thumbnail Image</label>
          <input
            name="image"
            type="text"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">User Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={user?.displayName || ""}
            readOnly
          />
        </div>

        <div>
          <label className="label">User Email</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            value={user?.email || ""}
            readOnly
          />
        </div>

        <button type="submit" className="btn bg-cyan-700 text-white w-full mt-4">
          Create
        </button>
      </form>
    </div>
  );
};

export default PostArticle;
