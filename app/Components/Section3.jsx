import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  { src: '/Section2.png', price: 'Rainbow 650' },
  { src: '/Section2.png', price: 'Rio 650' },
  { src: '/Section2.png', price: 'Big Bull 1300' },
  { src: '/Section2.png', price: 'Rome 600' },
  { src: '/Section2.png', price: 'Raibow 600' },
  { src: '/Section2.png', price: 'Rio 650' },
];

const Section3 = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const viewMoreRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    // Main section fade in
    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    // Title animation
    gsap.from(titleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
    });

    // Subtitle animation
    gsap.from(subtitleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: 'top 80%',
      },
    });

    // View More button animation
    gsap.from(viewMoreRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: viewMoreRef.current,
        start: 'top 80%',
      },
    });

    // Products stagger animation
    gsap.from(productRefs.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: productRefs.current[0],
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto p-4 mb-10">
      <div className="flex mb-6 justify-between">
        <div>
          <h1 ref={titleRef} className="pt-10 text-3xl font-bold mb-3 text-start">
            Hydration Essentials
          </h1>
          <h4 ref={subtitleRef}>Discover Our Range of Premium Water Bottles</h4>
        </div>
        <button
          ref={viewMoreRef}
          className="h-8 relative right-12 top-12 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => (productRefs.current[index] = el)}
            className="p-4 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={product.src}
              alt={`Product ${index + 1}`}
              width={250}
              height={150}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-xl font-semibold mt-4">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;