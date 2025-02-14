import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md absolute w-full">
      {/* Left side - Brand */}
      <div className="text-2xl font-bold text-black">
        BOTOL
      </div>

      {/* Right side - Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link href="/shop" className="text-black">Shop</Link>
        <Link href="/contact" className="text-black">Contact Us</Link>
        <Link href="/about" className="text-black">About</Link>
        <Link href="/journal" className="text-black">Journal</Link>
        <Link href="/custom" className="text-black">Custom</Link>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Inquiry Now
        </button>
        </div>
    </nav>
    )
}

export default Navbar