import React from "react";

const MobileView = () => {
  return (
    <div className="flex items-center justify-center">
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
      >
        <option selected>World Of Tanks</option>
        <option>World Of Warplanes</option>
        <option>World Of Warships</option>
      </select>
    </div>
  );
};

export default MobileView;
