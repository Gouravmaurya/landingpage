import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const Navbar = () => {
  const brandRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Initial states
    gsap.set([brandRef.current, linksRef.current.children, buttonRef.current], {
      y: -20,
      opacity: 0
    });

    // Create animation timeline
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power2.out"
      }
    });

    // Animate elements
    tl.to(brandRef.current, {
      y: 0,
      opacity: 1
    })
    .to(linksRef.current.children, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }, "-=0.5")
    .to(buttonRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6
    }, "-=0.3");

  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-transparent  absolute w-full">
      {/* Left side - Brand */}
      <div 
        ref={brandRef} 
        className="text-2xl font-bold text-black"
      >
        BOTOL
      </div>

      {/* Right side - Navigation Links */}
      <div ref={linksRef} className="flex items-center space-x-6">
        <Link href="/shop" className="text-black hover:text-blue-600 transition-colors duration-300">
          Shop
        </Link>
        <Link href="/contact" className="text-black hover:text-blue-600 transition-colors duration-300">
          Contact Us
        </Link>
        <Link href="/about" className="text-black hover:text-blue-600 transition-colors duration-300">
          About
        </Link>
        <Link href="/journal" className="text-black hover:text-blue-600 transition-colors duration-300">
          Journal
        </Link>
        <Link href="/custom" className="text-black hover:text-blue-600 transition-colors duration-300">
          Custom
        </Link>
        <button 
          ref={buttonRef}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Inquiry Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;