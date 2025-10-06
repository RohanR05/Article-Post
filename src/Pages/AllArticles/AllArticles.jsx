import { useEffect, useState } from "react";
import AllArticleCard from "./AllArticleCard";
import Loading from "../../Components/Loading";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://assignment11-server-side-lyart.vercel.app/articles", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
   <Loading></Loading>
    );

  if (error)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        {error}
      </div>
    );

  return (
    <div className="m-2 md:p-5">
      <AllArticleCard articles={articles} />
    </div>
  );
};

export default AllArticles;
