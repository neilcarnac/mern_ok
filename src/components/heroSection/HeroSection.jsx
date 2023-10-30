import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from React Router

function HeroSection() {
  return (
<div className='bg-black h-[800px] relative'>
  <img
    src="hero.jpg"
    alt="Hero Image"
    className="w-full h-full object-cover"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className="absolute top-1/4 ml-40 transform -translate-y-1/2">
    <h1 className="text-white text-5xl font-bold mb-4">
      Explore the World of Beverages
    </h1>
    <p className="text-white w-[40%] text-xl">
      Welcome to our diverse collection of beverages and media content. Experience the flavors, discover the stories, and quench your thirst for knowledge.
    </p>
  <Link to="/product-card"> {/* This Link component will navigate to /product-card */}
    <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 ease-in transition-[2000ms]">
      Go to Product Card
    </button>
  </Link>
  </div>
</div>




  )
}

export default HeroSection