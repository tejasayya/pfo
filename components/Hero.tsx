"use client"

import React, { useEffect, useState, useRef } from 'react';
import { Spotlight } from './ui/spotlight';
import TextScramble from './TextScramble';
import dynamic from 'next/dynamic';

import Link from 'next/link';
import testpg from './../pages/testpg';


const Hero = () => {
  
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
    // const handleHover = () => {
    //     setIsHovered(true);
    //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // };



    const handleHover = () => {
        // Clear any existing timeouts
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        // Start scramble immediately
        setIsHovered(true);
        
        // Set timeout to return to normal after 1 second
        timeoutRef.current = setTimeout(() => {
          setIsHovered(false);
        }, 1000); // Total animation duration 1 second
    };



    
    const cancelHover = () => {
        timeoutRef.current = setTimeout(() => {
          setIsHovered(false);
        }, 2000);
    };

  return (
    <div className='pb-20 pt-36'>
        <div>
            
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>


        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        
            {/* Radial gradient for the container to give a faded look */}
        
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            
            
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    
                    Dynamic Web Magic with Next.js
                </h2>



                <div 
                    className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 cursor-pointer mt-20"
                    onMouseEnter={handleHover}
                    onMouseLeave={cancelHover}
                >
                    {isHovered ? (
                    <TextScramble 
                        text="TEJA SAYYA"
                        duration={1000} // scramble completes in 1 second
                        delay={0}
                        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-="
                        key={Date.now()} // force a fresh animation on hover
                    />
                    ) : (
                    <span>TEJA SAYYA</span>
                    )}
                </div>



                <Link 
                    href="/testpg" 
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors mt-20"
                    >
                    Go to Test Page
                </Link>


                
            </div>

        </div>
    </div>
  )
}

export default Hero