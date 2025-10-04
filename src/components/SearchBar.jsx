import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className="flex items-center mt-4 w-full max-w-[350px] h-[55px] overflow-hidden 
                    border border-gray-300 rounded-md ml-5 sm:ml-4 md:ml-5 lg:ml-10">
      <button className="p-2 bg-blue-500 hover:bg-blue-200 transition ml-2 rounded-[10px]">
        <CiSearch size={20} />
      </button>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products or categories..."
        className="flex-1 p-2 outline-none"
      />
    </div>
  );
}

export default SearchBar;
