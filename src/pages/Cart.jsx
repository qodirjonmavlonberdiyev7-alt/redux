import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart && cart.length ? (
        <div className="flex">
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center p-3">
              {cart.map((cartItem) => (
                <CartTile key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-20">
              <h1>Your cart </h1>
              <p>
                <span>Total items</span>
                <span>:{cart.length}</span>
              </p>
              <p>
                <span>Total amount</span>
                <span>:{totalCart}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh]">
          <h1 className="font-bold text-gray-800 text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
