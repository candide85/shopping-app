import React, { useRef } from 'react'
import type { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux'
import { AddCart,  RemoveToCart, } from './store/features/CartSlice'
import { AddToCart } from './AddToCart'
import {Source} from './database/Source'
import { Card } from 'antd';
import {MessageOutlined} from '@ant-design/icons'
// import MessageOutlined from 'antd'


const Products = () => {
  const cart = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch()
  const name = useRef('')

  const AddtoCarts = (() =>{
    if(dispatch(AddCart())){
      console.log('dispatch')
    }
  })
  
  return (
    <>
      {/* <AddToCart /> */}
    <div className='flex justify-end p-6'>
      <div className='flex justify-end  items-end border-4 rounded-full w-20 h-20'>
        {cart === 0 ? <MessageOutlined className='' style={{width: 100, height: 100, fontSize: '36px', textAlign: 'center'}}/> : <MessageOutlined className='' style={{width: 100, height: 100, fontSize: '36px', textAlign: 'center', color: 'red'}}/>}
      {cart === 0 ? <button className=' text-xl'>{cart}</button> : <button className=' text-2xl text-red-600'>{cart}</button>}        
      </div>
    </div>
    <div className='grid grid-cols-4 p-4'>
      {
        Source.map((image) => (
      <Card style={{ width: 400, marginTop:12}}>
      <p><img src={image.photo} className=' object-cover ' alt='no found' /></p>

      <p className=' flex justify-start items-start'>
      designation: <input type='text' value={image.name} className=' ' />
      </p>
      <p className=' flex justify-start items-start'>
      price: <input type='number' value={image.price} />
      </p>
      <button onClick={AddtoCarts}  className=' border-spacing-1 rounded-lg bg-orange-800 p-2 text-white mt-2 mb-2'>Add to Cart</button>
    </Card>

        ))
      }
    </div>
   
    </>
  )
}

export default Products



























// import { useEffect, useState } from "react"
// import { useAppSelector } from "./store/store"

// const Products = () => {
//   const cartProducts = useAppSelector(state => state.cart.cart)
//   const [items, setItems] = useState(cartProducts)

//   useEffect(() =>{
//     localStorage.setItem('items',JSON.stringify(items))
//     if(items){
//       setItems(items)
//     }
//   }, [items])

//   return (
//     <div>
//       <div className="">
//         <h1>LIST OF ITEM</h1>
//                 {cartProducts.map((cart) => (
//                   <ul key={cart.id}>
//                     <li>{cart.id} {cart.name}</li>
//                   </ul>
//                 ))}
//       </div>      
//     </div>
//   )
// }

// export default Products
