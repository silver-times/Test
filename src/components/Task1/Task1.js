import React from "react";

const Task1 = () => {
  return (
    <div className=" flex justify-center items-center pt-5">
      <form class="flex justify-center items-center w-[450px]">
        <div class="relative w-full task1input">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-3 px-5"
            placeholder="Search ..."
            required
          />
        </div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-5 ml-1 text-sm font-medium text-[#414244] hover:text-[#EBEBEB]  bg-[#DCDEDF] rounded-md border shadow-lg border-gray-300 hover:bg-[#4d4f51c7] focus:ring-4 focus:outline-none focus:ring-gray-300 "
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Task1;
