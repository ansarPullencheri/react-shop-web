import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ products }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full h-fit">
      {products && products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white flex flex-col"
          >
            <img
              src={product.images && product.images[0]}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-blue-500 text-sm mt-1 font-medium">
                  Category: {product.category?.name}
                </p>
                <p
                  className="text-gray-600 text-sm mt-1 line-clamp-3 cursor-pointer hover:underline"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.description}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-lg">${product.price}</span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  Add to Cart
                </button>  
              </div>
            </div>  
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
}

export default Card;
