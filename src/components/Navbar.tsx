import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex p-4 justify-center items-center font-bold text-xl bg-gray-200 h-26">
        <div className=" mr-2 w-40 ">
            <NavLink className={({ isActive }) => isActive ? " bg-customColor1" : ""} to={'/'}>HOME</NavLink>
        </div>
      <div className=" ml-2">
            <NavLink className={({ isActive }) => isActive ? " bg-customColor1" : ""} to={'/product'}>PRODUCT</NavLink>
      </div>
      <div className=" ml-2">
            <NavLink className={({ isActive }) => isActive ? " bg-customColor1" : ""} to={'/addtocart'}>AddToCart</NavLink>
      </div>
    </div>
  )
}

export default Navbar
