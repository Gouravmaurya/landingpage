import React from 'react'
import Image from 'next/image'

const products = [
  { src: '/Section2.png', price: 'Rainbow 650' },
  { src: '/Section2.png', price: 'Rio 650' },
  { src: '/Section2.png', price: 'Big Bull 1300' },
  { src: '/Section2.png', price: 'Rome 600' },
  { src: '/Section2.png', price: 'Raibow 600' },
  { src: '/Section2.png', price: 'Rio 650' },
]

const Section3 = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className='flex mb-6 justify-between' >
      <div>
      <h1 className=" pt-10 text-3xl font-bold mb-3 text-start">Hydration Essentials</h1>
      <h4>Discover Our Range of Premium Water Bottles</h4>
      </div>
      <button className=" h-8 relative right-12 top-12 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              View More
            </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="p-4 rounded-lg ">
            <Image
              src={product.src}
              alt={`Product ${index + 1}`}
              width={250}
              height={150}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-xl font-semibold mt-4">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section3