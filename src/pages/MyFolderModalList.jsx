import React, { useState } from "react";

function HotSpotList({ HotSpot, listItems }) {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if ((currentPage + 1) * 8 < HotSpot.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * 8;
  const endIndex = startIndex + 8;
  const currentItems = HotSpot.slice(startIndex, endIndex);

  return (
    <div className="relative mt-5">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
        onClick={prevPage}
      >
        &lt;
      </button>
      <div className="grid grid-cols-4 gap-3">
        {currentItems.map((spot, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              className="bg-slate-300 w-[240px] h-[180px]" 
              src="https://via.placeholder.com/240x180.png" 
              alt={`Image ${index}`} 
            />
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
        onClick={nextPage}
      >
        &gt;
      </button>
    </div>
  );
}

export default HotSpotList;
