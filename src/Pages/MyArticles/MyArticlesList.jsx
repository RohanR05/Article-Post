import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
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
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#394a20",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment11-server-side-lyart.vercel.app/articles/${id}`,
          { method: "DELETE", credentials: "include" }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyArticles((prev) =>
                prev.filter((article) => article._id !== id)
              );
              Swal.fire("Deleted!", "Your article has been deleted.", "success");
            }
          })
          .catch((err) => console.error("Delete error:", err));
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-primary/10 rounded-xl shadow-lg"
    >
      {myArticles.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center text-base-content opacity-80 py-6"
        >
          You haven’t created any articles yet.
        </motion.p>
      ) : (
        <>
          {/* Card layout for small devices */}
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            {myArticles.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-base-300 bg-accent rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3 border-b border-base-300 pb-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-10 w-10">
                      <img
                        src={item.author_photo}
                        alt={item.name}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-neutral">{item.name}</p>
                    <p className="text-xs opacity-70">{item.publishedAt}</p>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="font-semibold text-secondary text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs opacity-70">{item.category}</p>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  <Link to={`/detailsMyArticle/${item._id}`}>
                    <button className="btn btn-xs bg-primary text-neutral hover:opacity-90 w-full">
                      Details
                    </button>
                  </Link>
                  <Link to={`/updateArticle/${item._id}`}>
                    <button className="btn btn-xs bg-secondary text-neutral hover:opacity-90 w-full">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-xs bg-error text-error-content hover:opacity-90 w-full"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table layout for medium & large screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden sm:block overflow-x-auto w-full"
          >
            <table className="table w-full min-w-[600px] text-sm sm:text-base border border-base-300 rounded-lg overflow-hidden">
              <thead className="bg-primary text-neutral">
                <tr>
                  <th className="hidden sm:table-cell">Author</th>
                  <th>Title</th>
                  <th className="hidden sm:table-cell">Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myArticles.map((item, index) => (
                  <motion.tr
                    key={item._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-accent hover:bg-primary/20 transition-colors border-b border-primary"
                  >
                    <td className="hidden sm:table-cell">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-8 w-8 sm:h-12 sm:w-12">
                            <img
                              src={item.author_photo}
                              alt={item.name}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-xs sm:text-sm">{item.name}</div>
                          <div className="text-[10px] sm:text-xs opacity-70">{item.publishedAt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-xs sm:text-sm text-secondary">{item.title}</td>
                    <td className="hidden sm:table-cell text-xs sm:text-sm">{item.category}</td>
                    <td className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Link to={`/detailsMyArticle/${item._id}`}>
                        <button className="btn btn-xs bg-primary text-neutral hover:opacity-90 w-full sm:w-auto">
                          Details
                        </button>
                      </Link>
                      <Link to={`/updateArticle/${item._id}`}>
                        <button className="btn btn-xs bg-secondary text-neutral hover:opacity-90 w-full sm:w-auto">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-xs bg-error text-error-content hover:opacity-90 w-full sm:w-auto"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default MyArticlesList;
