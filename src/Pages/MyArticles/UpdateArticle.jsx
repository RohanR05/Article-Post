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
        headers: {
          "content-type": "application/json",
        },
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
            title: "Your edit has been saved successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error!", "Something went wrong.", "error");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-2xl mx-auto my-10 p-6 sm:p-8 bg-accent shadow-xl rounded-2xl border border-primary"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6"
      >
        Edit Your Article
      </motion.h2>

      <motion.form
        onSubmit={handlePostArticles}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="space-y-5"
      >
        {/* Title */}
        <div>
          <label className="label text-sm font-medium text-primary">
            Title
          </label>
          <input
            name="title"
            defaultValue={user.title}
            placeholder="Enter article title"
            className="input input-bordered w-full bg-neutral text-primary border-primary"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="label text-sm font-medium text-primary">
            Category
          </label>
          <select
            name="category"
            defaultValue={user.category}
            className="select select-bordered w-full bg-neutral text-primary border-primary"
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
          <label className="label text-sm font-medium text-primary">
            Content
          </label>
          <textarea
            name="content"
            defaultValue={user.content}
            placeholder="Describe your thoughts..."
            rows={5}
            className="textarea textarea-bordered w-full bg-neutral text-primary border-primary"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="label text-sm font-medium text-primary">Tags</label>
          <input
            name="tags"
            type="text"
            defaultValue={user.tags}
            placeholder="e.g., tech, science, ai"
            className="input input-bordered w-full bg-neutral text-primary border-primary"
            required
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="label text-sm font-medium text-primary">
            Thumbnail Image
          </label>
          <input
            name="author_photo"
            type="text"
            defaultValue={user.author_photo}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full bg-neutral text-primary border-primary"
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="btn bg-primary text-neutral w-full mt-4 font-semibold shadow-md"
        >
          Update Article
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default UpdateArticle;
