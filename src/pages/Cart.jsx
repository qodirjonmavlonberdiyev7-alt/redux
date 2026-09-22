import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTile from '../components/CartTile';

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(
      cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
  }, [cart]);

  const totalFormatted = Math.round(totalCart * 12600).toLocaleString('uz-UZ');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[80vh]">
      {cart && cart.length ? (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">
              Savatdagi mahsulotlar ({cart.reduce((t, i) => t + i.quantity, 0)})
            </h1>
            {cart.map((cartItem) => (
              <CartTile key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24 space-y-6">
            <h2 className="text-lg font-black text-gray-900 border-b border-gray-100 pb-4">
              Buyurtma hisobi
            </h2>
            <div className="space-y-4 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <span>Jami mahsulotlar soni:</span>
                <span className="font-bold text-gray-900">
                  {cart.reduce((total, item) => total + item.quantity, 0)} ta
                </span>
              </div>
              <div className="flex justify-between">
                <span>Yetkazib berish:</span>
                <span className="font-bold text-emerald-600">BEPUL</span>
              </div>
              <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-black text-gray-900">
                <span>Umumiy summa:</span>
                <span className="text-[#7000ff]">{totalFormatted} so'm</span>
              </div>
            </div>

            <button className="w-full py-3.5 bg-[#7000ff] hover:bg-[#5c00d6] active:scale-95 text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-200 cursor-pointer">
              Xaridni rasmiylashtirish
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-24 h-24 rounded-full bg-violet-50 flex items-center justify-center text-4xl">
            🛒
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Savatingiz hozircha bo'sh</h2>
          <p className="text-gray-500 max-w-sm">
            Katalogimizga o'ting va o'zingizga yoqqan mahsulotlarni tanlang.
          </p>
          <Link
            to="/"
            className="px-8 py-3.5 bg-[#7000ff] text-white font-bold rounded-xl hover:bg-[#5c00d6] transition-all shadow-lg shadow-violet-200 active:scale-95"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      )}
    </main>
  );
};

export default Cart;