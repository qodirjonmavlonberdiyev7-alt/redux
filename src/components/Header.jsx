import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl font-black tracking-tight text-[#7000ff]">
            qodirjon <span className="text-gray-900">market</span>
          </span>
        </Link>

        {/* Qidiruv paneli */}
        <div className="flex-1 max-w-2xl hidden md:flex items-center bg-gray-100 rounded-xl overflow-hidden border border-transparent focus-within:border-[#7000ff] focus-within:bg-white transition-all">
          <input
            type="text"
            placeholder="Mahsulotlar va turkumlar bo'yicha qidiruv"
            className="w-full px-4 py-2.5 text-sm bg-transparent outline-none placeholder:text-gray-400"
          />
          <button className="px-4 py-2.5 text-gray-500 hover:text-[#7000ff] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        {/* Navigatsiya tugmalari */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-xl transition-colors ${
                isActive
                  ? "text-[#7000ff] bg-violet-50"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <span className="hidden sm:inline">Bosh sahifa</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-xl transition-colors ${
                isActive
                  ? "text-[#7000ff] bg-violet-50"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm7.5 0a.75.75 0 101.5 0 .75.75 0 00-1.5 0z"
              />
            </svg>
            <span className="hidden sm:inline">Savat</span>
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 sm:static bg-[#7000ff] text-white text-[10px] sm:text-xs font-bold w-4 h-4 sm:w-auto sm:h-auto sm:px-1.5 sm:py-0.5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
