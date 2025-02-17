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
              className="w-64 h-64 md:w-80 md:h-80"
            />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-blue-400 mb-2">Masters of Science, Computer Science</h3>
              <p className="text-gray-300">University of North Carolina at Charlotte | GPA: 4.0/4.0</p>
              <p className="text-gray-400 text-sm">Expected May 2025</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-blue-400 mb-2">Bachelors of Technology, Computer Science</h3>
              <p className="text-gray-300">Jawaharlal Nehru Technological University | CGPA: 9/10</p>
              <p className="text-gray-400 text-sm">Graduated June 2021</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Professional Experience</h2>
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
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-blue-400 mb-3">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'DSA'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm">
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
          <h2 className="text-3xl font-bold text-white mb-8">Projects & Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-blue-400 mb-2">Chat with Teja Sayya | RAG</h3>
              <p className="text-gray-300 mb-4">Built a RAG-based AI agent using LLM functionality</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
            </div>
            {/* Add other projects similarly */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
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
        </section>
      </div>
    </div>
  );
}