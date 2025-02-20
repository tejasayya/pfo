"use client"
import Particles from './components/Particles';
import CircularText from './components/CircularText';
import Image from 'next/image';
import ScrollVelocity from './components/ScrollVelocity';
import { motion } from 'framer-motion';
import React, { useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Expcomp from './components/Expcomp';
import details from './details.json';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CustomizedTimeline from './components/CostamizedTimeline';
import Typography from '@mui/material/Typography';
import TextScramble from '@/components/TextScramble';

export default function TestPage() {
  const sections = [
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'coding-profiles', title: 'Coding Profiles' },
    { id: 'contact', title: 'Contact' }
  ];

  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
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

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 p-4 bg-gray-900/90 backdrop-blur-sm">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          {sections.map((section) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`}
                className="text-white hover:text-blue-400 transition-colors text-sm md:text-base"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-28">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h3 className="text-xl text-white">Hello! Welcome to my Space</h3>
              <h3 className="text-xl text-white">I'm</h3>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Teja Swaroop Sayya</h1>
            </div>
            
            {/* Updated ScrambleText container */}
            <div className="w-full flex justify-center p-2">
              <div 
                className="uppercase tracking-widest text-sm md:text-base text-blue-100 cursor-pointer mt-10 flex flex-wrap justify-center items-center gap-2 font-mono"
                onMouseEnter={handleHover}
                onMouseLeave={cancelHover}
                style={{ maxWidth: '800px' }} // Added for better text wrapping control
              >
                {isHovered ? (
                  ['SOFTWARE ENGINEER', 'FULL STACK', 'AI/ML', 'HACKATHONS'].map((text, index) => (
                    <div key={text} className="flex items-center justify-center">
                      <TextScramble 
                        text={text}
                        duration={800}
                        delay={index * 100}
                        characters="!@#$%^&*()_+~`|}{[]\:;?><,./-="
                        // scrambleSpeed={50}
                        // revealSpeed={50}
                      />
                      {index < 3 && <span className="mx-1">|</span>}
                    </div>
                  ))
                ) : (
                  ['SOFTWARE ENGINEER', 'FULL STACK', 'AI/ML', 'HACKATHONS'].map((text, index) => (
                    <div key={text} className="flex items-center justify-center">
                      <span className="transition-opacity duration-300">{text}</span>
                      {index < 3 && <span className="mx-1">|</span>}
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center p-2">
          <Image 
            src="https://raw.githubusercontent.com/tejasayya/pfo/refs/heads/main/public/pik.jpg" 
            width={200} 
            height={200}
            className="rounded-lg"
            alt="Profile"
          />
        </div>
      </section>





        <ScrollVelocity
        texts={['Software Engineer | Full Stack Dev | AI/ML |']} 
        velocity={90}
        className="text-xl md:text-2xl text-white mb-20"
        />
        

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
          
          <div>
            <CustomizedTimeline />
          </div>

          <div className="space-y-8">
            {/* <Expcomp role={"Software Engineer"} tenure={"Time"} descriptions={"edho okati raa"}/> */}
            {details.Experience.map(exp => (
              <Expcomp role={exp.role} tenure={exp.tenure} descriptions={exp.descriptions}/>
            ))}
          </div>


        </section>

        

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          {/* Avatar Images */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <Image className="w-16 h-16 rounded-full" src={details.spring} width={64} height={64} alt="Spring"/>
            <Image className="w-16 h-16 rounded-full" src={details.react} width={64} height={64} alt="React"/>
            <Image className="w-16 h-16 rounded-full" src={details.next} width={64} height={64} alt="Next.js"/>
            <Image className="w-16 h-16 rounded-full" src={details.mongo} width={64} height={64} alt="MongoDB"/>
            <Image className="w-16 h-16 rounded-full" src={details.dsa} width={64} height={64} alt="DSA"/>
            <Image className="w-16 h-16 rounded-full" src={details.sd} width={64} height={64} alt="Software Development"/>
          </div>


          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.Skills.map(skk => (
              <Skills key={skk.title} title={skk.title} sk={skk.sk} />
            ))}
          </div>
        </section>

        {/* Certification section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3 text-center">AWS</h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'AWS', 'Huggingface', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Add other skill categories similarly */}
          </div>
        </section>

        {/* <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            
            

          </div>
        </section> */}






        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects & Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            
            {details.Projects.map(prj => (
              <Projects title={prj.title} img={prj.img} imgw={prj.imgw} imgh={prj.imgh} descrip={prj.descrip} code={prj.code} live={prj.live}/>                
            ))}

          </div>
        </section>


        {/* Education Section */}
        <section id="education" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-blue-400 mb-2 text-center">Masters of Science, Computer Science</h3>
              <p className="text-gray-300 text-center">University of North Carolina at Charlotte | GPA: 4.0/4.0</p>
              <p className="text-gray-400 text-sm text-center">Expected May 2025</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-blue-400 mb-2 text-center">Bachelors of Technology, Computer Science</h3>
              <p className="text-gray-300 text-center">Jawaharlal Nehru Technological University | CGPA: 9/10</p>
              <p className="text-gray-400 text-sm text-center">Graduated June 2021</p>
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact</h2>
          <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 rounded-lg text-white"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message"
                  className="w-full p-3 bg-gray-800 rounded-lg text-white h-32"
                ></textarea>
              </div>
              <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="relative">
          <CircularText
            text="TEJA*SWAROOP*SAYYA*"
            spinDuration={30}
            className="w-64 h-64 md:w-30 md:h-30"
          />
          </div>

        </section>
      </div>
    </div>
  );
}