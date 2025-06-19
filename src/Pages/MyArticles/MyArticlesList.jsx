import React, { use, useEffect, useState } from "react";
// or "react-router" if you're using v5
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";
import { Link, useLoaderData } from "react-router";

const MyArticlesList = () => {
  const { user } = use(AuthContext);
  const allArticles = useLoaderData();
  const [myArticles, setMyArticles] = useState([]);

  useEffect(() => {
    if (user?.email && allArticles?.length) {
      const filtered = allArticles.filter(
        (article) => article.email === user.email
      );
      setMyArticles(filtered);
    }
  }, [user, allArticles]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment11-server-side-lyart.vercel.app/articles/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyArticles((prev) =>
                prev.filter((article) => article._id !== id)
              );
              Swal.fire(
                "Deleted!",
                "Your article has been deleted.",
                "success"
              );
            }
          })
          .catch((err) => console.error("Delete error:", err));
      }
    });
  };

  return (
    <div className="p-4 dark:bg-cyan-700 dark:text-cyan-50">
      <h2 className="text-2xl font-bold mb-4 text-center">My Articles</h2>

      {myArticles.length === 0 ? (
        <p className="text-center">You have no articles created.</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full min-w-[600px]">
            <thead className="bg-cyan-100 text-cyan-800">
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myArticles.map((item) => (
                <tr
                  key={item._id}
                  className="dark:bg-cyan-700 dark:text-cyan-50"
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.author_photo}
                            alt={item.name}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm text-gray-500 dark:text-cyan-50">
                          {item.publishedAt}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm">{item.title}</td>
                  <td className="text-sm">{item.category}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-xs bg-green-500 text-white hover:bg-green-600">
                      <Link to={`/detailsMyArticle/${item._id}`}>Details</Link>
                    </button>
                    <button className="btn btn-xs bg-purple-500 text-white hover:bg-purple-600">
                      <Link to={`/updateArticle/${item._id}`}>Edit</Link>
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-xs bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyArticlesList;
