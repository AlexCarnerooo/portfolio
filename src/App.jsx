import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import profileImage from './assets/profile.jpg'
import logo from './assets/logo.png'

// Inicializar EmailJS
emailjs.init("slXG_icFbWsZU8f2r");

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await emailjs.send(
        'service_qqxvxzp',
        'template_t7e9rgf',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Alex Carnero',
          to_email: 'alexandrecarnerop@gmail.com',
        },
        'slXG_icFbWsZU8f2r'
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e3f] via-[#1e1e3f] to-[#1a1a35] overflow-x-hidden">
      {/* Hero Section with padding-top to prevent overlap */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#1e1e3f] to-[#1a1a35] pt-20">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="text-left space-y-4 md:space-y-6 fade-in-left order-2 lg:order-1">
              <h2 className="text-white/70 text-lg md:text-xl lg:text-2xl font-medium tracking-wider">Hola, soy</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Alexandre
                <br />
                Carnero
              </h1>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-medium">
                Desarrollador en Formación
              </h3>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg">
                Profesional en formación especializado en programación, IA y análisis de datos. 
                Combinando innovación tecnológica con perspectiva internacional para crear soluciones de impacto.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
                <a 
                  href="/portfolio/Alexandre_Carnero_CV.pdf"
                  download
                  className="w-full sm:w-auto group relative px-8 py-3 rounded-lg font-medium text-base lg:text-lg overflow-hidden">
                  <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-white group-hover:text-black">Descargar CV</span>
                </a>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/alexandre-carnero-1a1561283" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-200">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </a>
                  <a href="https://github.com/AlexCarnerooo" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-200">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://instagram.com/alexcarneroo" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-200">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative fade-in-right flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full"></div>
                <div className="w-full h-full rounded-full border border-white/10 overflow-hidden shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Alexandre Carnero"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Iconos tecnologías - ajustados para responsive */}
                <div className="absolute top-1/4 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 animate-float">
                  <div className="w-full h-full rounded-xl bg-[#282C34] p-2 shadow-lg">
                    <img 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" 
                      alt="React" 
                      className="w-full h-full object-contain animate-spin-slow"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 left-8 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 animate-float-delay">
                  <div className="w-full h-full rounded-xl bg-[#F7DF1E] p-2 shadow-lg">
                    <img 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
                      alt="JavaScript" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 animate-float-delay-2">
                  <div className="w-full h-full rounded-xl bg-[#3776AB] p-2 shadow-lg">
                    <img 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" 
                      alt="Python" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navbar - Updated with mobile menu functionality */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between py-4">
              <a href="#" className="flex items-center group">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-xl">AC</span>
                  </div>
                  <div className="ml-3 flex flex-col">
                    <span className="text-lg font-bold text-white tracking-wide">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
                        Alexandre
                      </span>
                    </span>
                    <span className="text-sm text-gray-400 -mt-1">
                      Carnero
                    </span>
                  </div>
                </div>
              </a>
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden text-white hover:text-white/70 transition-colors p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>

              {/* Desktop menu */}
              <div className="hidden lg:flex items-center gap-10">
                <a href="#sobre-mi" className="text-white hover:text-white/70 transition-colors font-medium">Sobre mí</a>
                <a href="#proyectos" className="text-white hover:text-white/70 transition-colors font-medium">Proyectos</a>
                <a href="#logros" className="text-white hover:text-white/70 transition-colors font-medium">Logros</a>
                <a href="#contacto" className="text-white hover:text-white/70 transition-colors font-medium">Contacto</a>
              </div>
            </div>

            {/* Mobile menu panel */}
            <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
              <div className="py-4 space-y-4">
                <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-white/70 transition-colors font-medium">Sobre mí</a>
                <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-white/70 transition-colors font-medium">Proyectos</a>
                <a href="#logros" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-white/70 transition-colors font-medium">Logros</a>
                <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-white/70 transition-colors font-medium">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. ¿Quién Soy? Section */}
      <section id="sobre-mi" className="py-12 bg-gradient-to-b from-[#1a1a35] to-[#1e1e3f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">¿Quien Soy?</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* ID Card estilo carnet profesional */}
            <div className="flex flex-col items-center">
              {/* Lanyard SVG */}
              <svg width="120" height="80" viewBox="0 0 120 80" className="-mb-8 -mt-4 z-10" style={{filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'}}>
                <g>
                  <rect x="52" y="0" width="16" height="32" rx="8" fill="#b0b0b0"/>
                  <rect x="56" y="28" width="8" height="16" rx="4" fill="#888"/>
                  <rect x="58" y="40" width="4" height="16" rx="2" fill="#444"/>
                  <path d="M60 56 Q60 70 20 78" stroke="#b0b0b0" strokeWidth="6" fill="none"/>
                  <path d="M60 56 Q60 70 100 78" stroke="#b0b0b0" strokeWidth="6" fill="none"/>
                </g>
              </svg>
              <div className="relative w-[270px] h-[370px] rotate-[-15deg] shadow-2xl rounded-xl bg-gradient-to-br from-black via-[#23232e] to-[#23232e] overflow-hidden border border-white/10">
                {/* Foto más grande, sin franja celeste */}
                <div className="w-full h-[180px] bg-white flex items-center justify-center z-20 relative p-0">
                  <img src={profileImage} alt="Alex Carnero" className="w-full h-full object-cover object-center rounded-none shadow-lg border-0" />
                </div>
                {/* Nombre y rol */}
                <div className="absolute bottom-24 left-0 w-full px-6">
                  <h3 className="text-2xl font-bold text-white leading-tight whitespace-normal break-words">Alexandre Carnero</h3>
                  <p className="text-base font-semibold whitespace-normal break-words text-[#2dd4bf]">Estudiante de Empresa y Tecnología</p>
                </div>
                {/* Línea y web/correo */}
                <div className="absolute bottom-8 left-0 w-full flex flex-col items-center">
                  <div className="w-48 h-[2px] bg-[#2dd4bf] mb-2 opacity-80"></div>
                  <span className="text-xs text-white/80 tracking-wide">alexandrecarnerop@gmail.com</span>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="space-y-4 text-base text-gray-300">
              <p className="leading-relaxed">
                Actualmente cursando mi tercer año en Empresa y Tecnología, combino mis estudios con una pasión creciente por la ciencia de datos y el desarrollo de proyectos tecnológicos innovadores.
              </p>
              <p className="leading-relaxed">
                Mi vida está marcada por el equilibrio entre tecnología y deporte. Como instructor de judo, he aprendido valores que aplico en cada proyecto: disciplina, perseverancia y trabajo en equipo. Actualmente, complemento esta experiencia con surf y yoga, buscando siempre nuevos desafíos.
              </p>
              <p className="leading-relaxed">
                Me destaco por mi espíritu inquieto y emprendedor, siempre involucrado en hackathons, programas de voluntariado y proyectos internacionales. Mi verdadera pasión radica en comunicar y vender ideas, conectando la tecnología con las personas a través de un mensaje claro y convincente.
              </p>
              <button className="mt-4 bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300 text-sm">
                Abierto a nuevas oportunidades
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="proyectos" className="py-20 bg-gradient-to-b from-[#1e1e3f] to-[#1a1a35]">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center text-white mb-4">Proyectos</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Una mezcla de análisis de datos, desarrollo web y proyectos de impacto social que reflejan mi pasión por la tecnología y los negocios.
          </p>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proyecto 1 - Yoga Website */}
            <div className="bg-[#20203a] rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[16/9]">
                <img 
                  src="/portfolio/images/projects/web_yoga.png"
                  alt="Yoga Website"
                  className="w-full h-full object-contain bg-[#1a1a2e]"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-white">José Carnero Yoga</h3>
                <p className="text-gray-400 text-sm">
                  Sitio web profesional para instructor de yoga, con información sobre clases, eventos y recursos de meditación.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">HTML</span>
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">CSS</span>
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">JavaScript</span>
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">Responsive</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <a 
                    href="https://josecarnero.org" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-transparent border border-white text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                  >
                    Sitio Web
                  </a>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 border border-white text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 2 - Song Recommender */}
            <div className="bg-[#20203a] rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[16/9]">
                <img 
                  src="/portfolio/images/projects/songrecommender.png" 
                  alt="Song Recommender"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-white">Song Recommender</h3>
                <p className="text-gray-400 text-sm">
                  Sistema de recomendación de música que utiliza machine learning para analizar preferencias musicales y sugerir canciones personalizadas. Integra la API de Spotify para acceder a una amplia biblioteca de música y características de las canciones.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">Python</span>
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">Machine Learning</span>
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">Spotify API</span>
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">Pandas</span>
                  <span className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">Scikit-learn</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <a 
                    href="https://github.com/AlexCarnerooo/Song-Recommender" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 border border-white text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a35] to-[#1e1e3f] overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Habilidades</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Tecnologías y herramientas que uso para crear soluciones innovadoras
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Overlay gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a35] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a35] to-transparent z-10"></div>

            {/* First moving row */}
            <div className="flex justify-center overflow-hidden">
              <div className="skills-slider-track">
                <div className="flex gap-20 items-center py-8">
                  {/* Python */}
                  <div className="skill-icon">
                    <svg viewBox="0 0 128 128" className="w-24 h-24">
                      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10)"/><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10)"/>
                    </svg>
                  </div>
                  {/* React */}
                  <div className="skill-icon">
                    <svg viewBox="0 0 128 128" className="w-24 h-24">
                      <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"/></g>
                    </svg>
                  </div>
                  {/* Vite */}
                  <div className="skill-icon">
                    <svg width="96" height="96" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                      <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
                      <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
                      <defs>
                      <linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#41D1FF"/>
                      <stop offset="1" stopColor="#BD34FE"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFEA83"/>
                      <stop offset="0.0833333" stopColor="#FFDD35"/>
                      <stop offset="1" stopColor="#FFA800"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Odoo */}
                  <div className="skill-icon">
                    <svg viewBox="0 0 128 128" className="w-24 h-24">
                      <path fill="#8f3c86" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Second moving row (reversed) */}
            <div className="flex justify-center overflow-hidden mt-8">
              <div className="skills-slider-track-reverse">
                <div className="flex gap-20 items-center py-8">
                  {/* Python */}
                  <div className="skill-icon">
                    <svg viewBox="0 0 128 128" className="w-24 h-24">
                      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10)"/><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10)"/>
                    </svg>
                  </div>
                  {/* React */}
                  <div className="skill-icon">
                    <svg viewBox="0 0 128 128" className="w-24 h-24">
                      <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"/></g>
                    </svg>
                  </div>
                  {/* Vite */}
                  <div className="skill-icon">
                    <svg width="96" height="96" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                      <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
                      <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
                      <defs>
                      <linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#41D1FF"/>
                      <stop offset="1" stopColor="#BD34FE"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFEA83"/>
                      <stop offset="0.0833333" stopColor="#FFDD35"/>
                      <stop offset="1" stopColor="#FFA800"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Odoo */}
                  <div className="skill-icon">
                    <svg viewBox="0 0 128 128" className="w-24 h-24">
                      <path fill="#8f3c86" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Certificaciones Section */}
      <section id="logros" className="py-20 bg-gradient-to-b from-[#1e1e3f] to-[#1a1a35]">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center text-white mb-12">Certificaciones</h2>
          
          {/* Habilidades Diferenciales */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Habilidades Diferenciales</h3>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Liderazgo y Deporte */}
              <div className="bg-[#20203a]/50 rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Liderazgo Deportivo</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Monitor de Judo Certificado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Cinturón Negro 2º Dan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Gestión de equipos deportivos
                  </li>
                </ul>
              </div>

              {/* Habilidades Sociales */}
              <div className="bg-[#20203a]/50 rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Trabajo en Equipo</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Voluntariado Internacional
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Proyectos Multiculturales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Comunicación Efectiva
                  </li>
                </ul>
              </div>

              {/* Resolución de Problemas */}
              <div className="bg-[#20203a]/50 rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Pensamiento Creativo</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Resolución de Problemas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Enfoque Práctico
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Innovación Continua
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificaciones Técnicas */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Certificaciones Técnicas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Santander Explorer */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio/images/certificates/santander_explorer.png" 
                    alt="Santander Explorer Certificate"
                    className="w-full h-full object-contain bg-[#1a1a2e]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-400 text-sm">2023</p>
                    <h3 className="text-xl font-bold text-white mb-1">Santander Explorer</h3>
                    <p className="text-gray-300 text-sm mb-4">Programa de emprendimiento e innovación del Banco Santander.</p>
                    <button 
                      onClick={() => window.open('/portfolio/images/certificates/santander_explorer.png', '_blank')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm w-fit mx-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>

              {/* Green Olives */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio/images/certificates/green_olives.png" 
                    alt="Green Olives Certificate"
                    className="w-full h-full object-contain bg-[#1a1a2e]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-400 text-sm">2023</p>
                    <h3 className="text-xl font-bold text-white mb-1">Green Olives Project</h3>
                    <p className="text-gray-300 text-sm mb-4">Proyecto internacional de sostenibilidad y desarrollo empresarial.</p>
                    <button 
                      onClick={() => window.open('/portfolio/images/certificates/green_olives.png', '_blank')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm w-fit mx-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Otros Certificados */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Otros Certificados</h3>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-500 ${showMore ? 'opacity-100' : 'opacity-40 max-h-[300px] overflow-hidden'}`}>
              {/* Monitor de Judo */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio/images/certificates/monitor_judo.png" 
                    alt="Monitor de Judo Certificate"
                    className="w-full h-full object-contain bg-[#1a1a2e]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-400 text-sm">2023</p>
                    <h3 className="text-xl font-bold text-white mb-1">Monitor de Judo</h3>
                    <p className="text-gray-300 text-sm mb-4">Instructor certificado de judo, combinando disciplina deportiva con habilidades de liderazgo.</p>
                    <button 
                      onClick={() => window.open('/portfolio/images/certificates/monitor_judo.png', '_blank')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm w-fit mx-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Making Seminar */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio/images/certificates/contact_making_seminar.png" 
                    alt="Contact Making Seminar Certificate"
                    className="w-full h-full object-contain bg-[#1a1a2e]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-400 text-sm">2023</p>
                    <h3 className="text-xl font-bold text-white mb-1">Contact Making Seminar</h3>
                    <p className="text-gray-300 text-sm mb-4">Participación en seminario internacional para el desarrollo de habilidades de networking.</p>
                    <button 
                      onClick={() => window.open('/portfolio/images/certificates/contact_making_seminar.png', '_blank')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm w-fit mx-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>

              {/* USC Winner */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio/images/certificates/uscwinner.jpg" 
                    alt="USC Winner Certificate"
                    className="w-full h-full object-contain bg-[#1a1a2e]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-400 text-sm">2024</p>
                    <h3 className="text-xl font-bold text-white mb-1">USC Winner</h3>
                    <p className="text-gray-300 text-sm mb-4">Reconocimiento por logros destacados en la Universidad de Santiago de Compostela.</p>
                    <button 
                      onClick={() => window.open('/portfolio/images/certificates/uscwinner.jpg', '_blank')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm w-fit mx-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>

              {/* Hackathon Winner */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio/images/certificates/hackatonwinner.jpg" 
                    alt="Hackathon Winner Certificate"
                    className="w-full h-full object-contain bg-[#1a1a2e]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-400 text-sm">2024</p>
                    <h3 className="text-xl font-bold text-white mb-1">Hackathon Winner</h3>
                    <p className="text-gray-300 text-sm mb-4">Ganador del hackathon de innovación y desarrollo tecnológico.</p>
                    <button 
                      onClick={() => window.open('/portfolio/images/certificates/hackatonwinner.jpg', '_blank')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm w-fit mx-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>

              {/* Hackathon Second */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio/images/certificates/hackatonsecond.jpg" 
                    alt="Hackathon Second Place Certificate"
                    className="w-full h-full object-contain bg-[#1a1a2e]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-400 text-sm">2024</p>
                    <h3 className="text-xl font-bold text-white mb-1">Hackathon Second Place</h3>
                    <p className="text-gray-300 text-sm mb-4">Segundo puesto en hackathon de innovación tecnológica.</p>
                    <button 
                      onClick={() => window.open('/portfolio/images/certificates/hackatonsecond.jpg', '_blank')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm w-fit mx-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>

              {/* Hot USA Finalist */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio/images/certificates/hotusafinalist.jpg" 
                    alt="Hot USA Finalist Certificate"
                    className="w-full h-full object-contain bg-[#1a1a2e]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-400 text-sm">2024</p>
                    <h3 className="text-xl font-bold text-white mb-1">Hot USA Finalist</h3>
                    <p className="text-gray-300 text-sm mb-4">Finalista en el programa de emprendimiento Hot USA.</p>
                    <button 
                      onClick={() => window.open('/portfolio/images/certificates/hotusafinalist.jpg', '_blank')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm w-fit mx-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botón Ver Más/Menos */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
              >
                <span>{showMore ? 'Ver Menos' : 'Ver Más'}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Form Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-[#1e1e3f] to-[#1a1a35]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Contacto</h2>
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-[#4ade80]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-[#4ade80]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-[#4ade80]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-transparent border border-white text-white py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              {status === 'success' && (
                <p className="text-green-500 text-center">¡Mensaje enviado con éxito!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">Error al enviar el mensaje. Por favor, intenta de nuevo.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App; 