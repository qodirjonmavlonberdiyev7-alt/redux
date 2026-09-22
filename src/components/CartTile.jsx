import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/slices/cart-slice'

const CartTile = ({ cartItem }) => {

  const dispatch = useDispatch()

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id))
  }

  return (
    <div className='flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl w-full'>
      <div className='flex items-center gap-5'>
        <img src={cartItem?.image} alt={cartItem?.title} className='h-28 rounded-lg object-contain' />
        <div className='space-y-2'>
          <h1 className='text-xl text-white font-bold'>{cartItem?.title}</h1>
          <p className='text-white'>{cartItem?.price}</p>
        </div>
      </div>
      <button onClick={handleRemoveFromCart} className='bg-red-950 text-white border-2 rounded-lg font-bold p-4 shrink-0'>
        Remove from cart
      </button>
    </div>
  )
}

export default CartTile