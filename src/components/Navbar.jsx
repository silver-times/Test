import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#970102] text-white">
      <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 py-4 ">
        <div className="">
          <Link to="/" className="flex items-end">
            <h1 className="text-3xl">Wargaming Test</h1>
          </Link>
        </div>
        <div className="flex mx-5 text-2xl font-medium">
          <Link to="/task1" className="mr-4">
            Task 1
          </Link>
          <Link to="/task2" className="mr-4">
            Task 2
          </Link>
          <Link to="/task3" className="mr-4">
            Task 3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
