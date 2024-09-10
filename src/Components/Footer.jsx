import React from 'react'
import { FaInstagram, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-red-400 via-red-700 to-red-900 py-16 text-white px-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Logo and Description */}
    <div className="flex flex-col items-center">
      <img src="./LOGO.png" alt="Restaurant Logo" className="w-[200px] h-auto mb-4" />
      <p className="text-center font-medium">Welcome to our restaurant, where flavors meet perfection. Enjoy a delightful dining experience with a touch of culinary excellence.</p>
    </div>

    {/* Navigation Links */}
    <div>
      <h4 className="font-bold mb-4">Quick Links</h4>
      <ul>
        <li className="mb-2">
          <a href="#about" className="hover:underline">About Us</a>
        </li>
        <li className="mb-2">
          <a href="#menu" className="hover:underline">Our Menu</a>
        </li>
        <li className="mb-2">
          <a href="#reservations" className="hover:underline">Reservations</a>
        </li>
        <li className="mb-2">
          <a href="#events" className="hover:underline">Events</a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </li>
      </ul>
    </div>

    {/* Contact Information */}
    <div>
      <h4 className="font-bold mb-4">Contact Information</h4>
      <p className="mb-2">757 Ronald Street, Toronto, DC 6778</p>
      <p className="mb-2">Phone: (018) 851-493</p>
      <a href="mailto:info@cloudkitchen.com" className="mb-2">Email: info@cloudkitchen.com</a>
    </div>

    {/* Opening Hours */}
    <div>
      <h4 className="font-bold mb-4">Opening Hours</h4>
      <p className="mb-2">Monday - Friday: 11:00 AM - 10:00 PM</p>
      <p className="mb-2">Saturday - Sunday: 9:00 AM - 11:00 PM</p>
    </div>
  </div>

  {/* Social Media & Copyright */}
  <div className="mt-12 border-t border-white pt-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Social Media */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <Link target='blank' to="https://www.facebook.com/" className="text-2xl hover:text-blue-600"><FaSquareFacebook/></Link>
        <Link target='blank' to="https://www.instagram.com/" className="text-2xl hover:text-purple-600"><FaInstagram/></Link>
        <Link target='blank' to="https://www.twitter.com/" className="text-2xl hover:text-blue-400"><FaTwitter/></Link>
      </div>

      {/* Copyright */}
      <p>© 2024 Cloud Kitchen. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
