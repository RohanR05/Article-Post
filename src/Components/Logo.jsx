import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="text-2xl md:text-3xl font-semibold text-primary">
      <Link to={"/"}>
        {" "}
        Atricle<span className="text-secondary">Hub</span>
      </Link>
    </div>
  );
};

export default Logo;
