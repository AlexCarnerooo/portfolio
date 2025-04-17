import { useState } from 'react'
import profileImage from '@/assets/profile.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#0f172a] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1a2e]/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">AlexCarnero</div>
          <div className="flex gap-12">
            <a href="#sobre-mi" className="text-white hover:text-secondary transition-colors">Sobre mí</a>
            <a href="#proyectos" className="text-white hover:text-secondary transition-colors">Proyectos</a>
            <a href="#logros" className="text-white hover:text-secondary transition-colors">Logros</a>
            <a href="#contacto" className="text-white hover:text-secondary transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 min-h-screen pt-24 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col justify-center">
            <h2 className="text-secondary text-2xl mb-4 animate-fade-in">Hola, soy</h2>
            <h1 className="text-white text-6xl font-bold mb-4 animate-slide-up">
              Alex<br/>Carnero
            </h1>
            <h3 className="text-secondary text-3xl mb-6 font-light italic">Frontend Developer</h3>
            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
              Transformando ideas en realidad a través<br/>
              de código limpio y soluciones innovadoras
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-dark px-6 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Descargar CV
              </button>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/alexandre-carnero-1a1561283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-secondary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/AlexCarnerooo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute -top-10 -right-10 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <div className="relative w-[450px] h-[450px]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary/20">
                <img 
                  src={profileImage}
                  alt="Alex Carnero" 
                  className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent"></div>
              </div>
            </div>
            {/* Iconos flotantes */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
              <div className="bg-[#61DAFB] p-2 rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
                  <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                  <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-10 right-0 translate-x-1/4">
              <div className="bg-[#F7DF1E] p-2 rounded-lg shadow-lg">
                <svg width="32" height="32" viewBox="0 0 32 32" className="w-8 h-8">
                  <rect width="32" height="32" fill="#F7DF1E"/>
                  <path d="M9.6 27.9l2.3-1.4c.4.8.8 1.5 1.8 1.5 .9 0 1.5-.4 1.5-1.8V16.4h2.9v9.9c0 3-1.8 4.3-4.3 4.3 -2.3 0-3.7-1.2-4.3-2.7" fill="#000"/>
                  <path d="M21.1 27.6l2.3-1.3c.6 1 1.4 1.7 2.8 1.7 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.3-2.1-1.9l-.7-.3c-2.1-.9-3.5-2-3.5-4.3 0-2.2 1.7-3.8 4.2-3.8 1.8 0 3.1.6 4.1 2.3l-2.2 1.4c-.5-.9-1-1.3-1.9-1.3 -.8 0-1.4.5-1.4 1.3 0 .9.6 1.2 1.8 1.8l.7.3c2.5 1.1 3.9 2.1 3.9 4.6 0 2.6-2 4-4.8 4 -2.7 0-4.4-1.3-5.2-3" fill="#000"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section will go here */}
      
    </div>
  )
}

export default App 