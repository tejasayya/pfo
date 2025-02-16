"use client"
// app/testpg/page.tsx


import Particles from './Particles';


export default function TestPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        
        <div style={{ width: '100%', height: '900px', position: 'relative' }}>
        <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
        />
        </div>
        
        
        




      </div>
    );
  }