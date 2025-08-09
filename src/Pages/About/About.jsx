const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-center">
      <h1 className="text-3xl font-bold text-cyan-700 dark:text-cyan-50 mb-6">
        About <span className="text-cyan-500">Next</span>Knowledge 📚✨
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        NextKnowledge is an article sharing platform where anyone can post their
        articles by logging in ✍️ and share them with others 🌐.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        This project is built using <strong>React ⚛️</strong>,{" "}
        <strong>Tailwind CSS 🎨</strong>, <strong>MongoDB 🍃</strong>,{" "}
        <strong>Firebase 🔥</strong>, <strong>JWT 🔑</strong>,{" "}
        <strong>DaisyUI 🌼</strong>, and <strong>Canva 🖌️</strong> for banners,
        among other tools.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        It provides a smooth and secure experience for writers to publish and
        share their knowledge with the community 🤝.
      </p>
    </div>
  );
};

export default About;
