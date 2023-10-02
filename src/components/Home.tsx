import React from "react"
import Navbar from "./Navbar"
import p1 from '../images/ph1.jpg'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center align-middle">
        <div className=" flex flex-col items-start justify-center flex-1  bg-customColor1 h-screen text-white text-5xl pl-5">
            <p className=" pb-4">Sale 20% Off On Everything</p>
            <p className=" pb-4">100% Original Products</p>
            <p className=" pb-4">Free Delivery</p>
            <p className=" pb-4">Pay on delivery must be available</p>
            <p className=" pb-4">Easy 15 days returns and exchanges</p>
            <p className=" pb-4">Try and buy must be available</p>
        </div>
        <div className=" flex-1 h-sceen bg-customColor1 ">
            <img src={p1} alt="not found"  className=" h-screen w-screen" />
        </div>
      </div>
    </div>
  )
}

export default Home
