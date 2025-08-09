import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="bg-base-300 dark:bg-black">
      {" "}
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto m-16">
        <Outlet></Outlet>
      </div>{" "}
      <Footer></Footer>
    </div>
  );
};

export default Root;
