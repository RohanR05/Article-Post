import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import CardDertails from "./CardDertails";

const ArticleDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const {user}=use(AuthContext)
  console.log(data, id);
  const article = data.find((item) => item._id === id);

  return (
    <div>
      {article ? (
        <CardDertails article={article} currentUser={user} />
      ) : (
        <p>Article Not Found</p>
      )}
    </div>
  );
};

export default ArticleDetails;