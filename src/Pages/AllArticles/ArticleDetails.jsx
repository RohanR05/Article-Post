import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import CardDertails from "./CardDertails";
import Loading from "../../Components/Loading";

const ArticleDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { user } = use(AuthContext);

  if (!data) {
    return (
        <Loading></Loading>
    );
  }

  const article = data.find((item) => item._id === id);

  return (
    <div className="min-h-[70vh] p-6 md:p-10">
      {article ? (
        <CardDertails article={article} currentUser={user} />
      ) : (
        <div className="flex flex-col items-center justify-center text-center bg-base-200 text-base-content rounded-xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-primary mb-3">
            Article Not Found 😕
          </h2>
          <p className="text-base opacity-80">
            The article you’re looking for doesn’t exist or may have been
            removed.
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
