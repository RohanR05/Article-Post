import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateArticle = () => {
  const user = useLoaderData();
  console.log(user);

  const handlePostArticles = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const PostArticle = Object.fromEntries(formData.entries());

    PostArticle.tags = PostArticle.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    console.log(PostArticle);

    fetch(
      `https://assignment11-server-side-lyart.vercel.app/articles/${user._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(PostArticle),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your edit has been done",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data, "after update");
          form.reset()
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-cyan-50 text-cyan-700  shadow-xl shadow-cyan-700 rounded-lg p-6 dark:bg-cyan-700 dark:text-cyan-50">
      <h2 className="text-3xl font-bold text-center mb-6">
        Edit Your Articles
      </h2>
      <form onSubmit={handlePostArticles} className="space-y-4">
        <div>
          <label className="label">Title</label>
          <input
            name="title"
            defaultValue={user.title}
            placeholder="Enter title name"
            className="input input-bordered w-full dark:bg-cyan-700"
            required
          />
        </div>

        <div>
          <label className="label">Category</label>
          <select
            name="category"
            defaultValue={user.category}
            className="select select-bordered w-full dark:bg-cyan-700"
            required
          >
            <option defaultValue={user.category}>Select a category</option>
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
            defaultValue={user.content}
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
            defaultValue={user.tags}
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
            defaultValue={user.author_photo}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full dark:bg-cyan-700"
            required
          />
        </div>

        <button
          type="submit"
          className="btn bg-cyan-700 text-white w-full mt-4"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default UpdateArticle;
