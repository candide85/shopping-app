import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Cart {
  value: number
}

const initialState: Cart = {
  value: 0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddCart: (state) => {
        state.value += 1
    },
    RemoveToCart: (state) => {
        state.value -= 1
    },
   
  },
})
export const { AddCart, RemoveToCart } = CartSlice.actions

export default CartSlice.reducer




















