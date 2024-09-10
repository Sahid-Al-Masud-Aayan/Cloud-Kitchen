import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import { FcNext, FcPrevious } from 'react-icons/fc';
import { FaRegIdBadge } from 'react-icons/fa6';
import { IoLogInOutline } from 'react-icons/io5';

const Home = () => {


  const images = [
    'slid1.jpg', 'slid2.jpg', 'slid5.jpg', 'slid4.jpg', 'slid14.jpg', 'slid6.jpg',
    'slid7.jpg', 'slid18.jpg', 'slid9.jpg', 'slid10.jpg', 'slid11.jpg', 'slid12.jpg', 
    'slid8.jpg', 'slid13.jpg', 'slid3.jpg', 'slid15.jpg', 'slid16.jpg', 'slid17.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerRow = 6; // 6 images per row
  const totalImages = images.length;

  // Move to next slide
  const nextSlide = () => {
    if (currentIndex + imagesPerRow < totalImages) {
      setCurrentIndex(currentIndex + imagesPerRow);
    }
  };

  // Move to previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerRow);
    }
  };


  return (
    <>
    
     <div className="w-full h-[729px] bg-[url('/banner.jpg')] bg-cover bg-center flex justify-center items-center">
     <div className="flex justify-center items-center flex-col">
        <h1 className='text-7xl text-white uppercase font-bold'>Unforgettable Dishes,</h1>
        <h1 className='text-7xl text-white uppercase font-bold mt-6'>Unforgettable <span className='text-red-600'>Memories</span></h1>
        <Link className='w-[320px] h-[60px] rounded-lg border-[3px] mt-10 hover:bg-white/30 hover:backdrop-blur-sm duration-150 flex justify-center items-center text-white text-2xl font-medium hover:mt-4 active:scale-125'>
        Top Picks
        <MdArrowOutward className='text-4xl'/>
        </Link>
     </div>
     </div>
     <div className="w-full h-[670px] bg-[url('/banner2.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="flex justify-center items-center gap-7">
            <div className="flex justify-center items-center gap-3 flex-col">
            <div className="flex justify-center items-center gap-3">
                <img className='w-[340px] h-[280px]' src="./img2.jpg" alt="Foods" />
                <img className='w-[340px] h-[280px]' src="./img3.jpg" alt="Foods" />
            </div>
            <img className='w-full h-[300px]' src="./img4.jpg" alt="Foods" />
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
     <div className="w-full h-[750px] bg-gradient-to-r from-blue-400 to-blue-900 flex justify-center items-center flex-col">
     <h2 className='text-5xl font-bold text-orange-500 text-center'>Gallery</h2>
     {/* <div className="flex justify-center items-center gap-5 mt-7">
      <img className='w-[400px] h-[270px]' src="./slid1.jpg" alt="ImGE" />
      <img className='w-[400px] h-[270px]' src="./slid2.jpg" alt="ImGE" />
      <img className='w-[400px] h-[270px]' src="./slid3.jpg" alt="ImGE" />
     </div>
     <div className="flex justify-center items-center gap-5 mt-5">
      <img className='w-[400px] h-[270px]' src="./slid4.jpg" alt="ImGE" />
      <img className='w-[400px] h-[270px]' src="./slid7.jpg" alt="ImGE" />
      <img className='w-[400px] h-[270px]' src="./slid6.jpg" alt="ImGE" />
     </div> */}
<div className=" flex justify-center items-center relative mt-7">
  {/* Slider container */}
  <div className="overflow-hidden">
    {/* Images grid */}
    <div className="grid grid-cols-3 gap-4">
      {/* Top 3 Images */}
      {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
        <div key={index} className="w-[400px] h-[270px]">
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Bottom 3 Images */}
      {images.slice(currentIndex + 3, currentIndex + 6).map((image, index) => (
        <div key={index} className="w-[400px] h-[270px]">
          <img src={image} alt={`Slide ${index + 4}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  </div>

  {/* Navigation buttons */}
  <button
    onClick={prevSlide}
    className="absolute left-[-5%] top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-fullbg-white/80 duration-200"
    disabled={currentIndex === 0}
  >
    <FcPrevious className='text-black text-xl' />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-[-5%] top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-fullbg-white/80 duration-200"
    disabled={currentIndex + imagesPerRow >= totalImages}
  >
    <FcNext className='text-black text-xl' />
  </button>
</div>
     </div>
     <div className="w-full h-[660px] bg-[url('/banner3.jpg')] bg-cover bg-center flex justify-center items-center">
     <div className="flex justify-center items-center flex-col w-[900px] bg-orange-500  h-[400px] rounded-3xl shadow-2xl">
     <h2 className='text-5xl font-bold text-blue-900'><span className='text-red-700'>Savor </span>an unforgettable experience</h2>
     <p className='text-xl w-[851px] font-medium text-white text-center mt-5'>
     Whether you're craving a delightful meal or planning a special occasion, we are here to make every moment memorable. Visit us today or place your order online to savor the finest dishes, crafted with love and fresh ingredients.
            </p>
        <Link className='w-[360px] h-[60px] rounded-full mt-10 bg-black/70 hover:backdrop-blur-lg gap-2 hover:bg-blue-900 duration-150 flex justify-center items-center text-white text-2xl font-medium active:scale-90'>
        Register today
        <IoLogInOutline className='text-4xl'/>
        </Link>
     </div>
     </div>
    </>
  )
}

export default Home
