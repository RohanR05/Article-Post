import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthContext";
import { Link, useLoaderData } from "react-router";
import {
  FaUser,
  FaBook,
  FaTag,
  FaEye,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";

const MyArticlesList = () => {
  const { user } = useContext(AuthContext);
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
      className="bg-accent rounded-xl shadow-lg p-6"
    >
      {myArticles.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center text-info opacity-80 py-6 text-sm md:text-base"
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
                className="border border-base-300 bg-base-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
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
                    <p className="font-semibold text-sm text-primary flex items-center gap-1">
                      <FaUser className="text-secondary" /> {item.name}
                    </p>
                    <p className="text-xs opacity-70">{item.publishedAt}</p>
                  </div>
                </div>

                <div className="mb-2">
                  <p className="font-semibold text-secondary text-sm flex items-center gap-1">
                    <FaBook className="text-secondary" /> {item.title}
                  </p>
                  <p className="text-xs opacity-70 flex items-center gap-1">
                    <FaTag className="text-secondary" /> {item.category}
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <Link to={`/detailsMyArticle/${item._id}`}>
                    <button className="btn btn-xs bg-primary text-neutral w-full flex items-center justify-center gap-2">
                      <FaEye className="text-secondary" /> Details
                    </button>
                  </Link>
                  <Link to={`/updateArticle/${item._id}`}>
                    <button className="btn btn-xs bg-secondary text-neutral w-full flex items-center justify-center gap-2">
                      <FaEdit /> Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-xs bg-error text-error-content w-full flex items-center justify-center gap-2"
                  >
                    <FaTrashAlt /> Delete
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
            <table className="table w-full min-w-[650px] text-sm sm:text-base border border-base-300 rounded-lg overflow-hidden">
              <thead className="bg-primary text-neutral">
                <tr>
                  <th className="hidden sm:table-cell flex items-center gap-2">
                    <FaUser className="text-secondary" /> Author
                  </th>
                  <th className="flex items-center gap-2">
                    <FaBook className="text-secondary" /> Title
                  </th>
                  <th className="hidden sm:table-cell flex items-center gap-2">
                    <FaTag className="text-secondary" /> Category
                  </th>
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
                    className="bg-accent hover:bg-primary/15 transition-colors border-b border-base-300"
                  >
                    <td className="hidden sm:table-cell">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-8 w-8 sm:h-10 sm:w-10">
                            <img
                              src={item.author_photo}
                              alt={item.name}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-primary flex items-center gap-1">
                            <FaUser className="text-secondary" /> {item.name}
                          </div>
                          <div className="text-[10px] sm:text-xs opacity-70">
                            {item.publishedAt}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-info text-sm">{item.title}</td>
                    <td className="hidden sm:table-cell text-sm">
                      {item.category}
                    </td>
                    <td className="flex flex-col sm:flex-row gap-2 sm:gap-3 py-2">
                      <Link to={`/detailsMyArticle/${item._id}`}>
                        <button className="btn btn-xs bg-primary text-neutral flex items-center gap-1 sm:gap-2">
                          <FaEye className="text-secondary" /> View
                        </button>
                      </Link>
                      <Link to={`/updateArticle/${item._id}`}>
                        <button className="btn btn-xs bg-secondary text-neutral flex items-center gap-1 sm:gap-2">
                          <FaEdit /> Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-xs bg-error text-error-content flex items-center gap-1 sm:gap-2"
                      >
                        <FaTrashAlt /> Delete
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
