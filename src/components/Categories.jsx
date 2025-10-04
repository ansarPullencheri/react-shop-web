import React from "react";

function Categories({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="p-4 w-full lg:w-[350px] mr-4">
      <div className="px-4 py-4 border border-gray-300 rounded-md bg-white shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-center lg:text-left">
          Categories
        </h2>

        <ul className="flex flex-row lg:flex-col flex-wrap gap-2 lg:space-y-2">
          {/* "All" Button */}
          <li
            onClick={() => onSelectCategory(null, "All")}
            className={`cursor-pointer px-3 py-2 rounded text-center transition ${
              activeCategory === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            All
          </li>

          {/* Dynamic Category List */}
          {categories.length > 0 ? (
            categories.map((category) => (
              <li
                key={category.id}
                onClick={() => onSelectCategory(category.id, category.name)}
                className={`cursor-pointer px-3 py-2 rounded text-center transition ${
                  activeCategory === category.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {category.name}
              </li>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
