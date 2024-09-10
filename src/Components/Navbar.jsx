import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-[70px] bg-gradient-to-r from-red-600 to-red-400 flex justify-center items-center fixed z-50'>
        <div className="container flex justify-center items-center gap-7">
            <Link to='/'>
            <img className='w-[200px] h-[60px]' src="./LOGO.png" alt="Logo" />
            </Link>
            <ul className='flex justify-center items-center gap-2'>
                
                <Link className='text-white font-semibold text-lg hover:text-red-900 duration-150 px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg'>
                Home
                </Link>
                <div className="relative">
                <p className="for-app text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg flex justify-center items-center gap-1">
                 Cuisine
                 <FaChevronDown className='mt-1'/>
                </p>
                <div className="absolute z-50 bg-[#ffcbcb] w-[220px] h-[350px] top-[3.5rem] rounded-lg left-[50%] translate-x-[-50%] for-dis  flex flex-col justify-center items-center">
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Italian</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Mexican</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Chinese</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Japanese</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Mediterranean</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>American</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Thai</Link>
                </div>
                </div>
                <div className="relative">
                <p className='for-app text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg flex justify-center items-center gap-1'>
                    Meals
                    <FaChevronDown className='mt-1'/>
                </p>
                <div className="absolute z-50 bg-[#ffcbcb] w-[220px] h-[300px] top-[3.5rem] rounded-lg left-[50%] translate-x-[-50%] for-dis  flex flex-col justify-center items-center">
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Breakfast</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Lunch</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Evening</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Dinner</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Dessert</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Appetizers</Link>

                </div>
                </div>
                {/* <div className="relative">
                <p className='for-app text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg flex justify-center items-center gap-1'>
                    Diets
                    <FaChevronDown className='mt-1'/>
                </p>
                <div className="absolute z-50 bg-[#ffcbcb] w-[220px] h-[250px] top-[3.5rem] rounded-lg left-[50%] translate-x-[-50%] for-dis  flex flex-col justify-center items-center">
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Vegeterian</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Vegan</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Gluten-Free</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Keto</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Paleo</Link>
                </div>
                </div> */}
                <div className="relative">
                <p className='for-app text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg flex justify-center items-center gap-1'>
                    Cooked
                    <FaChevronDown className='mt-1'/>
                </p>
                <div className="absolute z-50 bg-[#ffcbcb] w-[220px] h-[380px] top-[3.5rem] rounded-lg left-[50%] translate-x-[-50%] for-dis flex flex-col justify-center items-center">
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Grilled</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Baked</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Fried</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Steamed</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Slow-Cooked</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Roasted</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Boiled</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Poached</Link>
                </div>
                </div>
                <div className="relative">
                <p className='for-app text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg flex justify-center items-center gap-1'>
                    Regionals
                    <FaChevronDown className='mt-1'/>
                </p>
                <div className="absolute z-50 bg-[#ffcbcb] w-[220px] h-[200px] top-[3.5rem] rounded-lg left-[50%] translate-x-[-50%] for-dis  flex flex-col justify-center items-center">
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Southern</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Northeastern</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Western</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Midwestern</Link>
                </div>
                </div>
                <div className="relative">
                <p className='for-app text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg flex justify-center items-center gap-1'>
                    Snacks
                    <FaChevronDown className='mt-1'/>
                </p>
                <div className="absolute z-50 bg-[#ffcbcb] w-[220px] h-[480px] top-[3.5rem] rounded-lg left-[50%] translate-x-[-50%] for-dis  flex flex-col justify-center items-center">
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Street Food</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Comfort Food</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Dessert Bars</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Fast Food</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Gourmet Food</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Seafood</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Vegan</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>BBQ</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Fusion</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Healthy Eating</Link>
                </div>
                </div>
                <div className="relative">
              <p className="for-app text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg flex justify-center items-center gap-1">
                  Drinks
                  <FaChevronDown className="mt-1" />
                  </p>
              <div className="absolute z-50 bg-[#ffcbcb] w-[220px] h-[220px] top-[3.5rem] rounded-lg left-[50%] translate-x-[-50%] for-dis flex flex-col justify-center items-center">
                  <Link className="text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold" to="#">
                   Cocktails
                  </Link>
                  <Link className="text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold" to="#">
                   Soft Drinks
                  </Link>
                  <Link className="text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold" to="#">
                   Non-Alcoholic
                  </Link>
                  <Link className="text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold" to="#">
                   Hot Drinks
                  </Link>
              </div>
              </div>
              <div className="relative">
                <p className='for-app text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg flex justify-center items-center gap-1'>
                    Internationals
                    <FaChevronDown className='mt-1'/>
                </p>
                <div className="absolute z-50 bg-[#ffcbcb] w-[220px] h-[250px] top-[3.5rem] rounded-lg left-[50%] translate-x-[-50%] for-dis  flex flex-col justify-center items-center">
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Fusion Cuisine</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Traditional Dishes</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Street Fusion</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Hearty Meals</Link>
                    <Link className='text-black text-lg w-full hover:bg-white/30 py-2 flex justify-center items-center font-semibold' to='#'>Exotic Dishes</Link>
                </div>
              </div>
                <Link to='#' className='text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg'>
                    About 
                </Link>
                <Link to='#' className='text-white font-semibold text-lg hover:text-red-900 duration-150 cursor-pointer px-1 py-2 hover:backdrop-blur-lg hover:bg-white/30 rounded-lg'>
                    Contact
                </Link>
            </ul>
            <div className=" flex justify-center items-center gap-2 flex-wrap">
        <Link to="#" className="relative h-[100%] w-[100px] p-2 flex justify-center items-center active:scale-90 bg-[#1E3A8A] text-lg font-semibold text-[#fff] rounded-full overflow-hidden group duration-150 ">
        <p className='text-lg font-bold text-[#fff] z-50'>Register</p>
        <div className="absolute w-full h-full left-[50%] opacity-0 group-hover:opacity-100 transition-opacity ease transition-visibility ease duration-300 bg-orange-500"></div>
        </Link>
         <Link to="/login" className=" relative h-[100%] w-[100px] p-2 flex justify-center items-center bg-[#374151] text-lg font-semibold text-[#fff] rounded-full overflow-hidden group duration-150 active:scale-90">
         <p className='text-lg font-bold text-[#fff] z-50'>Login</p>
         <div className="absolute w-full h-full right-[50%] opacity-0 group-hover:opacity-100 transition-opacity ease transition-visibility ease duration-300 bg-green-700"></div>
         </Link>
         </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
