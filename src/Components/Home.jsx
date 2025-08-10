import { Link, useLoaderData } from "react-router";
import HomeArticleCard from "./HomeArticleCard";
import img from "../assets/Green Minimalist Summer Big Sale Medium Banner.png";

const Home = () => {
  const article = useLoaderData();

  const categories = [...new Set(article.map((a) => a.category))];

  return (
    <div className="text-[#394a20] dark:text-white pt-16">
      <img src={img} />{" "}
      <div>
        <div className="my-16 text-center bg-white py-10">
          <h2 className="text-2xl font-semibold mb-10">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, idx) => (
              <Link to={`category/${category}`} key={idx}>
                {" "}
                <button className="px-4 py-2 bg-[#394a20] text-white rounded-full hover:bg-[#90b855]">
                  {category}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center my-4 text-2xl font-medium">
          Here are some latest Articles...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 my-10 m-5">
          {[...article]
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, 6)
            .map((data, index) => (
              <HomeArticleCard key={index} data={data} />
            ))}
        </div>
      </div>
      <div
        className="dark:bg-white dark:text-[#394a20] mt-16"
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "40px 0",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          border: "10px solid #394a20",
          borderRadius: "16px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "#394a20",
          }}
        >
          📊 Website Statistics
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap:'wrap',
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
      <div
        className="dark:text-white dark:bg-[#394a20]"
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "60px 20px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          border: "10px solid #394a20",
          borderRadius: "16px",
          marginTop: "48px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "30px",
            color: "#394a20",
          }}
        >
          💡 Our Mission
        </h2>

        <p
          style={{
            fontSize: "2rem",
            maxWidth: "1100px",
            margin: "0 auto 30px",
            lineHeight: "1.5",
            color: "#394a20",
          }}
        >
          “Empowering voices, protecting privacy, and connecting communities —
          one thoughtful article at a time.”
        </p>

        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "900px",
            margin: "0 auto 20px",
            lineHeight: "1.5",
            color: "#394a20",
          }}
        >
          Built with Node.js, React, MongoDB, Tailwind CSS, DaisyUI, JavaScript,
          Firebase, and JWT for a safe and modern social platform.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "20px",
            color: "#394a20",
          }}
        >
          <span>⚙️ Node.js</span>
          <span>⚛ React</span>
          <span>🍃 MongoDB</span>
          <span>🎨 Tailwind CSS</span>
          <span>💠 DaisyUI</span>
          <span>🔥 Firebase</span>
          <span>🔑 JWT Security</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
