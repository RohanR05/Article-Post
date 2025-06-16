import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import CardDertails from "./CardDertails";
import { AuthContext } from "../Provider/AuthContext";

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