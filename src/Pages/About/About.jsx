import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faPen,
  faGlobe,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          About <span className="text-secondary">ArticleHub</span> 📚✨
        </h1>
        <p className="text-lg md:text-xl text-base-content leading-relaxed max-w-3xl mx-auto">
          NextKnowledge is a modern article sharing platform where anyone can
          securely log in and post their thoughts. Users can create, update, or
          delete posts and explore articles shared by others 🌐.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl shadow-lg shadow-primary/50 bg-accent/80 border border-info">
          <h2 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="text-secondary" />
            User Friendly
          </h2>
          <p className="text-base-content leading-relaxed">
            Users can register and log in securely. Once logged in, they can
            post articles, edit or delete their content, and interact with
            posts from other writers.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg shadow-primary/50 bg-accent/80 border border-info">
          <h2 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faLock} className="text-secondary" />
            Secure & Modern
          </h2>
          <p className="text-base-content leading-relaxed">
            Built with Firebase Authentication for secure login and JWT tokens
            for protected API routes, ensuring user data and posts are safe.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg shadow-primary/50 bg-accent/80 border border-info">
          <h2 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faPen} className="text-secondary" />
            Post & Share
          </h2>
          <p className="text-base-content leading-relaxed">
            Easily create new articles, update or delete your posts anytime.
            Share your thoughts with the community in a secure and modern
            environment.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg shadow-primary/50 bg-accent/80 border border-info">
          <h2 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faGlobe} className="text-secondary" />
            Explore Articles
          </h2>
          <p className="text-base-content leading-relaxed">
            Discover articles from other users. Read, get inspired, and connect
            with like-minded writers and thinkers from the community.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary mb-3 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faCogs} className="text-secondary" />
          Built With
        </h2>
        <p className="text-base-content text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          React ⚛️, Tailwind CSS 🎨, MongoDB 🍃, Firebase 🔥, JWT 🔑, DaisyUI 🌼,
          and other modern tools to ensure a smooth and secure experience.
        </p>
      </div>
    </div>
  );
};

export default About;
