import React, { useEffect, useState } from 'react';
import ProductTile from '../components/ProductTile';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      if (data) setProducts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-5">
        <h1 className="text-2xl font-black text-gray-900">Mashhur mahsulotlar</h1>
        <span className="text-2xl text-gray-300 font-light">&gt;</span>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
              <div className="aspect-square bg-gray-100" />
              <div className="p-3 space-y-2">
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-2/3" />
                <div className="h-4 bg-gray-100 rounded w-1/2 mt-2" />
                <div className="h-8 bg-gray-100 rounded-xl w-full mt-3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {products?.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;