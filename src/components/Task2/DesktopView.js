import React from "react";

const DesktopView = () => {
  return (
    <div>
      <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap items-center justify-center mx-auto">
          <div
            className="hidden w-full items-center md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 bg-[#EBECEC] rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li className="mr-2">
                <a
                  href="#"
                  className="block py-1 px-5 text-[#727476] rounded-lg hover:bg-[#727476] hover:text-[#EFF1F3]"
                  aria-current="page"
                >
                  World Of Tanks
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="block py-1 px-5 text-[#727476] rounded-lg hover:bg-[#727476] hover:text-[#EFF1F3]"
                  aria-current="page"
                >
                  World Of Warplanes
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="block py-1 px-5 text-[#727476] rounded-lg hover:bg-[#727476] hover:text-[#EFF1F3]"
                  aria-current="page"
                >
                  World Of Warships
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DesktopView;
