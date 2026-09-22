import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/ProductTile";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchListOfProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles height={"120"} width={"120"} color="red" visible={true} />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((pi) => <ProductTile key={pi.id} product={pi} />)
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
