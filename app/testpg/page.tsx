"use client"
// app/testpg/page.tsx


import Particles from './Particles';
import CircularText from './CircularText';
import Image from 'next/image';
import ScrollVelocity from './ScrollVelocity';


export default function TestPage() {
    

    return (
      <div className="min-h-screen flex items-center justify-center bg-black relative">
        
        <div style={{ width: '100%', height: '900px', position: 'relative' }}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={500}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />


        </div>

        {/**Nav Bar . Contains Education, Experience, Skills, Projects, Coding Profiles, Contact */}
        <div className="absolute top-0 left-0 w-full p-7 rounded-xl" style={{
            backgroundColor: 'rgba(36, 37, 38, 0.95)'
        }}>
            <ul className="flex items-center justify-center gap-6">
          <li>
            <a href="#experience" className="text-white hover:text-gray-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className="text-white hover:text-gray-300">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-gray-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#coding-profiles" className="text-white hover:text-gray-300">
              Coding Profiles
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>


        </div>
        
               

        <div className="absolute top-[120px] left-[20px] z-20">
        <CircularText
          text="TEJA*SWAROOP*SAYYA*"
          onHover="speedUp"
          spinDuration={30}
          className="custom-class"
        />
      </div>





      {/* New content container with a noisy, transparent grey background */}
      <div
        className="absolute top-[340px] z-30 p-6 rounded-lg max-w-md items-center justify-center"
        style={{
          backgroundColor: 'rgba(36, 37, 38, 0.95)',
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Photo container */}
            <Image
              src="https://github.com/tejasayya/pfo/blob/main/public/pik.jpg"
              alt="Your Photo"
              className="object-cover w-full h-full"
              width={128}
              height={128}
            />
            
          </div>
          {/* Text container */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="text-white text-2xl font-bold text-center justify-center">
              Hello!
            </h2>
            <h2 className="text-white text-2xl font-bold text-center">
              Welcome to my Space
            </h2>
            <p className="mt-2 text-gray-300 text-sm">
              A short about myself: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>



        <div className="absolute top-[600px] left-[20px] z-20"> 
        <ScrollVelocity
            texts={['Software Engineer |', 'Full Stack Developer |', 'Java Developer |']} 
            velocity={90} 
            className="custom-scroll-text"
        />
        </div>



        </div>


        
        




    );
  }