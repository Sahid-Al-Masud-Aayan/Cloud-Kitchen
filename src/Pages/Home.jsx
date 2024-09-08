import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <>
     <div className="w-full h-[729px] bg-[url('./banner.jpg')] bg-cover bg-center flex justify-center items-center">
     <div className="flex justify-center items-center flex-col">
        <h1 className='text-7xl text-white uppercase font-bold'>Unforgettable Dishes,</h1>
        <h1 className='text-7xl text-white uppercase font-bold mt-6'>Unforgettable <span className='text-red-500'>Memories</span></h1>
        <Link className='w-[320px] h-[60px] rounded-lg border-[3px] mt-10 hover:bg-white/30 hover:backdrop-blur-sm duration-150 flex justify-center items-center text-white text-2xl font-medium hover:mt-4 active:scale-125'>
        Top Picks
        <MdArrowOutward className='text-4xl'/>
        </Link>
     </div>
     </div>
     <div className="w-full h-[670px] pt-20 bg-[url('./banner2.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="flex justify-center items-center gap-7">
            <div className="flex justify-center items-center gap-3 flex-col">
            <div className="flex justify-center items-center gap-3">
                <img className='w-[340px] h-[300px]' src="./img2.jpg" alt="Foods" />
                <img className='w-[340px] h-[300px]' src="./img3.jpg" alt="Foods" />
            </div>
            <img className='w-full h-[340px]' src="./img4.jpg" alt="Foods" />
            </div>
            <div className="flex justify-center items-center gap-5 flex-col">
            <h2 className='text-5xl font-bold text-blue-950'><span className='text-red-900'>Experience</span> the Finest Flavors</h2>
            <p className='text-xl w-[651px] font-medium text-sky-800'>
            At our restaurant, we believe that great food brings people together. Our carefully crafted menu features a variety of dishes made from fresh, high-quality ingredients that will satisfy every craving. Whether you’re here for a casual meal or a special occasion, our warm atmosphere and exceptional service ensure an unforgettable dining experience.
            From mouthwatering starters to indulgent desserts, each dish is prepared with passion and precision. We invite you to savor the flavors, relax with friends and family, and enjoy a culinary journey like no other.
            </p>
            </div>
        </div>
     </div>
    </>
  )
}

export default Home
