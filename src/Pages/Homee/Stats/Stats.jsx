import React from "react";
import { useLoaderData } from "react-router";

const Stats = () => {
  const article = useLoaderData();
  return (
    <div>
      {" "}
      <h1
        style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#394a20" }}
      >
        📊 Website Statistics
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "60px",
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: "#394a20",
        }}
      >
        <div>📰 Articles Posted: {article.length}</div>
        <div>👍 Total Likes: 256</div>
        <div>💬 Total Comments: 78</div>
      </div>
    </div>
  );
};

export default Stats;
