import React, { useEffect, useRef } from 'react';
import Navbar from "./Navbar";
import gsap from "gsap";

const Section1 = () => {
    const ringRef1 = useRef(null);
    const ringRef2 = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Timeline for synchronized animations
        const tl = gsap.timeline({
            defaults: { 
                duration: 1.5,
                ease: "power3.out"
            }
        });

        // Initial states
        gsap.set([ringRef1.current, ringRef2.current], {
            scale: 0,
            opacity: 0
        });

        gsap.set(contentRef.current.children, {
            y: 50,
            opacity: 0
        });

        // Animate rings
        tl.to(ringRef1.current, {
            scale: 1,
            opacity: 1,
            rotate: 360,
        })
        .to(ringRef2.current, {
            scale: 1,
            opacity: 1,
            rotate: -360,
        }, "-=1.3")
        // Animate content
        .to(contentRef.current.children, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
        }, "-=1");

    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                {/* Large background ring with gradient */}
                <div 
                    ref={ringRef1}
                    className="absolute w-[600px] h-[600px] -z-20 rounded-full -right-48 -top-48 bg-gradient-to-r from-blue-300/20 via-blue-500/20 to-blue-700/20 p-2"
                >
                    <div className="w-full h-full rounded-full bg-white" />
                </div>
                
                {/* Middle ring with gradient */}
                <div 
                    ref={ringRef2}
                    className="absolute w-[450px] h-[450px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-300/30 via-blue-500/30 to-blue-700/30 p-2"
                >
                    <div className="w-full h-full rounded-full bg-white" />
                </div>
                
                <div ref={contentRef} className="w-1/3 relative z-10">
                    <h1 className="text-4xl font-bold mb-4">
                        The Ultimate Champion for Hydration
                    </h1>
                    <h3 className="text-xl mb-8">
                        We believe in the power of hydration - our mission is simple yet vital
                    </h3>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                        Inquiry Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Section1;