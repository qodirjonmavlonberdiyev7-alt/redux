import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../store/slices/cart-slice';

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  const formattedPrice = Math.round(cartItem?.price * cartItem?.quantity * 12600).toLocaleString('uz-UZ');
  const unitPrice = Math.round(cartItem?.price * 12600).toLocaleString('uz-UZ');

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 bg-white border border-gray-100 rounded-2xl hover:border-violet-200 hover:shadow-md transition-all gap-4 sm:gap-5">
      <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#f7f7fa] p-3 rounded-xl flex-shrink-0 flex items-center justify-center">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-full w-full object-contain mix-blend-multiply"
          />
        </div>
        <div className="space-y-1 min-w-0">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2">
            {cartItem?.title}
          </h3>
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
            {cartItem?.category}
          </p>
          <p className="text-[13px] text-gray-500">
            {unitPrice} so'm / dona
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-6 border-t sm:border-t-0 pt-3 sm:pt-0">
        {/* Miqdor boshqaruvi */}
        <div className="flex items-center bg-violet-50 rounded-xl p-1 border border-violet-100">
          <button
            onClick={() => dispatch(decreaseQuantity(cartItem.id))}
            className="w-8 h-8 rounded-lg bg-white text-[#7000ff] font-bold flex items-center justify-center hover:bg-[#7000ff] hover:text-white active:scale-90 transition-all shadow-sm"
          >
            −
          </button>
          <span className="px-4 font-extrabold text-gray-800 text-sm">
            {cartItem?.quantity}
          </span>
          <button
            onClick={() => dispatch(increaseQuantity(cartItem.id))}
            className="w-8 h-8 rounded-lg bg-white text-[#7000ff] font-bold flex items-center justify-center hover:bg-[#7000ff] hover:text-white active:scale-90 transition-all shadow-sm"
          >
            +
          </button>
        </div>

        <p className="text-base font-black text-gray-900 whitespace-nowrap">
          {formattedPrice} <span className="text-xs font-medium text-gray-500">so'm</span>
        </p>

        <button
          onClick={() => dispatch(removeFromCart(cartItem.id))}
          className="w-9 h-9 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all active:scale-90"
          title="O'chirish"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartTile;