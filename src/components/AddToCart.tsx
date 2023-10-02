import React from 'react'
import type { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux'
import { AddCart, RemoveToCart } from './store/features/CartSlice'

export function AddToCart() {
  const count = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(AddCart())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(RemoveToCart())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}























