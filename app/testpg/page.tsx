// "use client"
// // app/testpg/page.tsx


// import Particles from './Particles';
// import CircularText from './CircularText';
// import Image from 'next/image';
// import ScrollVelocity from './ScrollVelocity';


// export default function TestPage() {
    

//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black relative">
        
//         <div style={{ width: '100%', height: '900px', position: 'relative' }}>
//             <Particles
//                 particleColors={['#ffffff', '#ffffff']}
//                 particleCount={500}
//                 particleSpread={10}
//                 speed={0.1}
//                 particleBaseSize={100}
//                 moveParticlesOnHover={true}
//                 alphaParticles={false}
//                 disableRotation={false}
//             />


//         </div>

//         {/**Nav Bar . Contains Education, Experience, Skills, Projects, Coding Profiles, Contact */}
//         <div className="absolute top-0 left-0 w-full p-7 rounded-xl" style={{
//             backgroundColor: 'rgba(36, 37, 38, 0.95)'
//         }}>
//             <ul className="flex items-center justify-center gap-6">
//           <li>
//             <a href="#experience" className="text-white hover:text-gray-300">
//               Experience
//             </a>
//           </li>
//           <li>
//             <a href="#education" className="text-white hover:text-gray-300">
//               Education
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="text-white hover:text-gray-300">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="text-white hover:text-gray-300">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#coding-profiles" className="text-white hover:text-gray-300">
//               Coding Profiles
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="text-white hover:text-gray-300">
//               Contact
//             </a>
//           </li>
//         </ul>


//         </div>
        
               

//         <div className="absolute top-[120px] left-[20px] z-20">
//         <CircularText
//           text="TEJA*SWAROOP*SAYYA*"
//           onHover="speedUp"
//           spinDuration={30}
//           className="custom-class"
//         />
//       </div>





//       {/* New content container with a noisy, transparent grey background */}
//       <div
//         className="absolute top-[340px] z-30 p-6 rounded-lg max-w-md items-center justify-center"
//         style={{
//           backgroundColor: 'rgba(36, 37, 38, 0.95)',
//           backgroundImage:
//             "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
//         }}
//       >
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Photo container */}
//             <Image
//               src="https://github.com/tejasayya/pfo/blob/main/public/pik.jpg"
//               alt="Your Photo"
//               className="object-cover w-full h-full"
//               width={128}
//               height={128}
//             />
            
//           </div>
//           {/* Text container */}
//           <div className="mt-4 md:mt-0 md:ml-4">
//             <h2 className="text-white text-2xl font-bold text-center justify-center">
//               Hello!
//             </h2>
//             <h2 className="text-white text-2xl font-bold text-center">
//               Welcome to my Space
//             </h2>
//             <p className="mt-2 text-gray-300 text-sm">
//               A short about myself: Lorem ipsum dolor sit amet, consectetur
//               adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
//               dolore magna aliqua.
//             </p>
//           </div>
//         </div>



//         <div className="absolute top-[600px] left-[20px] z-20"> 
//         <ScrollVelocity
//             texts={['Software Engineer |', 'Full Stack Developer |', 'Java Developer |']} 
//             velocity={90} 
//             className="custom-scroll-text"
//         />
//         </div>



//         </div>


        
        




//     );
//   }




////////////////////////////////



"use client"
import Particles from './Particles';
import CircularText from './CircularText';
import Image from 'next/image';
import ScrollVelocity from './ScrollVelocity';
import { motion } from 'framer-motion';
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function TestPage() {
  const sections = [
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'coding-profiles', title: 'Coding Profiles' },
    { id: 'contact', title: 'Contact' }
  ];

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
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Teja Swaroop Sayya
              </h1>
              <ScrollVelocity
                texts={['Software Engineer |', 'Full Stack Developer |', 'AI/ML Engineer |']} 
                velocity={90}
                className="text-xl md:text-2xl text-blue-400 mb-6"
              />
              <div className="text-gray-300 space-y-2">
                <p>+1 (980) 230 4200</p>
                <p>teja.sayya108@gmail.com</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://linkedin.com/in/teja-sayya/" target="_blank" className="hover:text-blue-400">
                    LinkedIn
                  </a>
                  <a href="https://leetcode.com/Teja_Sayya/" target="_blank" className="hover:text-blue-400">
                    LeetCode
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <CircularText
              text="TEJA*SWAROOP*SAYYA*"
              spinDuration={30}
              className="w-64 h-64 md:w-30 md:h-30"
            />
          </div>
        </section>

          <div className="absolute ">

          </div>


        

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {/* Add similar structured divs for each experience */}
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-blue-400 mb-2">Open Source Developer</h3>
              <p className="text-gray-400 text-sm mb-4">June 2023 - Present</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Collaborated on backend improvements for Rocket.Chat and FitCheck App</li>
                <li>Optimized database queries and API integrations</li>
                <li>Contributed to TensorFlow Addons repository</li>
              </ul>
            </div>
            {/* Add other experiences following same pattern */}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3 text-center">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3 text-center">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3 text-center">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3 text-center">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3 text-center">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3 text-center">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            


            {/* Add other skill categories similarly */}
          </div>
        </section>



        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3 text-center">AWS</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            
            


            {/* Add other skill categories similarly */}
          </div>
        </section>




        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects & Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              
              <CardContainer className='inter-var'>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Make things float in air
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    <Image src={"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={500} height={500}>

                    </Image>
                  
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Hover over this card to unleash the power of CSS perspective
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Github 🔗
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Deployed 🔗
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            
              <h3 className="text-xl text-blue-400 mb-2">Chat with Teja Sayya | RAG</h3>
              <p className="text-gray-300 mb-4">Built a RAG-based AI agent using LLM functionality</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
            </div>
            
            
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              
              <CardContainer className='inter-var'>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Make things float in air
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Hover over this card to unleash the power of CSS perspective
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Hover over this card to unleash the power of CSS perspective
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            
              <h3 className="text-xl text-blue-400 mb-2">Chat with Teja Sayya | RAG</h3>
              <p className="text-gray-300 mb-4">Built a RAG-based AI agent using LLM functionality</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              
              <CardContainer className='inter-var'>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Make things float in air
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Hover over this card to unleash the power of CSS perspective
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Hover over this card to unleash the power of CSS perspective
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            
              <h3 className="text-xl text-blue-400 mb-2">Chat with Teja Sayya | RAG</h3>
              <p className="text-gray-300 mb-4">Built a RAG-based AI agent using LLM functionality</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
            </div>


            {/* Add other projects similarly */}
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