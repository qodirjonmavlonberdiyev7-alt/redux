import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../store/slices/cart-slice';

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = Boolean(cartItem);

  const monthlyPrice = Math.round((product?.price * 12600) / 12);
  const formattedPrice = Math.round(product?.price * 12600).toLocaleString('uz-UZ');
  const oldPrice = Math.round(product?.price * 14000).toLocaleString('uz-UZ');
  const discountPercent = Math.round(
    ((product?.price * 14000 - product?.price * 12600) / (product?.price * 14000)) * 100
  );

  function handleAddToCart(e) {
    e.stopPropagation();
    dispatch(addToCart(product));
  }

  function handleIncrease(e) {
    e.stopPropagation();
    dispatch(increaseQuantity(product.id));
  }

  function handleDecrease(e) {
    e.stopPropagation();
    if (cartItem?.quantity === 1) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(decreaseQuantity(product.id));
    }
  }

  return (
    <div className="group relative bg-white rounded-2xl flex flex-col justify-between overflow-hidden border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60 transition-all duration-300 cursor-pointer">
      <div>
        {/* Rasm bloki */}
        <div className="relative w-full aspect-square bg-[#f7f7fa] overflow-hidden flex items-center justify-center p-4">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Chegirma badge */}
          {discountPercent > 0 && (
            <span className="absolute top-2.5 left-2.5 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded-lg shadow-sm">
              -{discountPercent}%
            </span>
          )}

          {/* Like tugmasi */}
          <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-110 active:scale-90 transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.575-4.688-4.575-1.396 0-2.597.55-3.312 1.487A4.69 4.69 0 009.688 3.675C7.1 3.675 5 5.765 5 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>

          {/* Original tegi */}
          <span className="absolute bottom-2.5 left-2.5 bg-[#7000ff] text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide">
            ORIGINAL
          </span>
        </div>

        {/* Ma'lumotlar */}
        <div className="px-3 pt-3 space-y-1.5">
          <h2 className="text-[13px] text-gray-800 font-medium line-clamp-2 leading-snug h-9 group-hover:text-[#7000ff] transition-colors">
            {product?.title}
          </h2>

          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <span className="text-amber-400 text-xs">★</span>
            <span className="font-semibold text-gray-700">4.9</span>
            <span className="text-gray-400">({product?.rating?.count || 128})</span>
          </div>

          <div className="flex items-baseline gap-2 pt-0.5">
            <p className="text-sm font-extrabold text-gray-900 leading-none">
              {formattedPrice} <span className="text-[11px] font-medium text-gray-500">so'm</span>
            </p>
          </div>
          <p className="text-[11px] text-gray-400 line-through leading-none">
            {oldPrice} so'm
          </p>

          <div className="inline-block bg-yellow-300 text-gray-900 text-[10px] font-bold px-2 py-1 rounded-lg">
            {monthlyPrice.toLocaleString('uz-UZ')} so'm/oyiga
          </div>
        </div>
      </div>

      {/* Savatga qo'shish qismi */}
      <div className="p-3 pt-3">
        {!isInCart ? (
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 rounded-xl bg-[#7000ff] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#5c00d6] active:scale-95 transition-all shadow-sm shadow-violet-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.994-4.694 2.598-7.184.16-.658-.32-1.302-1-1.302H5.106M7.5 14.25L5.106 5.106M7.5 14.25L4.5 4.5M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            Savatga
          </button>
        ) : (
          <div className="w-full flex items-center justify-between bg-violet-50 rounded-xl p-1 border border-violet-100">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 rounded-lg bg-white text-[#7000ff] font-bold flex items-center justify-center hover:bg-[#7000ff] hover:text-white active:scale-90 transition-all shadow-sm"
            >
              −
            </button>
            <span className="font-extrabold text-gray-800 text-sm min-w-[20px] text-center">
              {cartItem.quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 rounded-lg bg-white text-[#7000ff] font-bold flex items-center justify-center hover:bg-[#7000ff] hover:text-white active:scale-90 transition-all shadow-sm"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTile;