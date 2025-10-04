import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Apiservice/Api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getAllProducts();
      const prod = data.find((p) => p.id === parseInt(id));
      setProduct(prod);
      if (prod && prod.images && prod.images.length > 0) {
        setMainImage(prod.images[0]); // Default main image
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
       <div className="mt-[130px]">
      <div className="p-8  border border-gray-600 rounded-lg w-[95%] mx-auto mt-[50px] flex flex-col md:flex-row gap-8">
        {/* Left Side Thumbnails */}
        <div className="flex flex-row md:flex-col gap-4 w-full md:w-1/4" >
          {product.images &&
            product.images.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title}-${index}`}
                className="w-20 h-20 object-cover rounded cursor-pointer border border-gray-300 hover:border-blue-500"
                onClick={() => setMainImage(img)}
              />
            ))}
        </div>

        {/* Main Image */}
        <div className="flex-shrink-0">
          <img
            src={mainImage}
            alt={product.title}
            className="w-[400px] h-[400px] object-cover rounded"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-start">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-2 font-medium">
            Category: {product.category?.name}
          </p>
          <p className="text-gray-800 mb-4">{product.description}</p>
          <span className="font-bold text-lg">${product.price}</span>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
