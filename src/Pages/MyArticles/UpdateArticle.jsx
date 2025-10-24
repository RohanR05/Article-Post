import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const UpdateArticle = () => {
  const user = useLoaderData();

  const handlePostArticles = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const PostArticle = Object.fromEntries(formData.entries());

    PostArticle.tags = PostArticle.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    fetch(
      `https://assignment11-server-side-lyart.vercel.app/articles/${user._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(PostArticle),
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Article updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch(() =>
        Swal.fire("Error!", "Something went wrong while updating.", "error")
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto my-12 bg-accent shadow-2xl rounded-2xl border border-primary p-8 sm:p-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8"
      >
        Update Your Article
      </motion.h2>

      <motion.form
        onSubmit={handlePostArticles}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-6"
      >
        {/* Title */}
        <div>
          <label className="label text-sm font-semibold text-secondary">
            Title
          </label>
          <input
            name="title"
            defaultValue={user.title}
            placeholder="Enter article title"
            className="input input-bordered w-full bg-neutral text-primary border-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="label text-sm font-semibold text-secondary">
            Category
          </label>
          <select
            name="category"
            defaultValue={user.category}
            className="select select-bordered w-full bg-neutral text-primary border-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            required
          >
            <option disabled>Select a category</option>
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

        {/* Content */}
        <div>
          <label className="label text-sm font-semibold text-secondary">
            Content
          </label>
          <textarea
            name="content"
            defaultValue={user.content}
            placeholder="Describe your thoughts..."
            rows={6}
            className="textarea textarea-bordered w-full bg-neutral text-primary border-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="label text-sm font-semibold text-secondary">
            Tags
          </label>
          <input
            name="tags"
            type="text"
            defaultValue={user.tags}
            placeholder="e.g., tech, science, ai"
            className="input input-bordered w-full bg-neutral text-primary border-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <p className="text-xs opacity-70 mt-1">
            Separate tags using commas (e.g., history, culture, travel)
          </p>
        </div>

        {/* Thumbnail */}
        <div>
          <label className="label text-sm font-semibold text-secondary">
            Thumbnail Image
          </label>
          <input
            name="author_photo"
            type="text"
            defaultValue={user.author_photo}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full bg-neutral text-primary border-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="btn bg-primary hover:bg-secondary text-neutral w-full mt-6 font-semibold shadow-md border-none transition-all"
        >
          Save Changes
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default UpdateArticle;
