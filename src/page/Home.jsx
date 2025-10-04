import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { getAllProducts } from "../Apiservice/Api";

function Home() {
  const navigate = useNavigate();

  // ✅ Redirect to login if not logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch categories
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // ✅ Fetch products based on category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data = [];
        if (selectedCategoryId) {
          const res = await fetch(
            `https://api.escuelajs.co/api/v1/categories/${selectedCategoryId}/products`
          );
          data = await res.json();
        } else {
          data = await getAllProducts();
        }
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [selectedCategoryId]);

  // ✅ Search filter
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category?.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  // ✅ Handle category select
  const handleCategorySelect = (categoryId, categoryName) => {
    setSelectedCategoryId(categoryId);
    setActiveCategory(categoryName);
  };

  // ✅ Handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar />

      <div className="pt-[110px] flex flex-col sm:flex-row justify-between items-center px-6">
  <SearchBar onSearch={handleSearch} />
</div>

<div className="pt-4 flex flex-col lg:flex-row gap-6 p-4">
  <Categories
    categories={categories}
    activeCategory={activeCategory}
    onSelectCategory={handleCategorySelect}
  />
  <Card products={filteredProducts} />
</div>


      <Footer />
    </>
  );
}

export default Home;
