import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { saveAs } from 'file-saver'
import profileImage from './assets/profile.jpg'
import logo from './assets/logo.png'
import ContactForm from './ContactForm'

// Inicializar EmailJS con tu clave pública
emailjs.init("slXG_icFbWsZU8f2r");

const heroImage = '/portfolio/images/presentandoAtlic.jpg';

function App() {
  const form = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    const templateParams = {
      to_name: 'Alex',
      from_name: form.current.name.value,
      from_email: form.current.email.value,
      message: form.current.message.value,
      reply_to: form.current.email.value
    };

    try {
      const result = await emailjs.send(
        'service_qqxvxzp',
        'template_t7e9rgf',
        templateParams,
        'slXG_icFbWsZU8f2r'
      );

      console.log('SUCCESS!', result.text);
      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.log('FAILED...', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Lista de logos a mostrar
  const skillLogos = [
    { src: '/portfolio/images/logos/vite.svg', alt: 'Vite' },
    { src: '/portfolio/images/logos/canva.svg', alt: 'Canva' },
    { src: '/portfolio/images/logos/html.svg', alt: 'HTML' },
    { src: '/portfolio/images/logos/css.svg', alt: 'CSS' },
    { src: '/portfolio/images/logos/access.svg', alt: 'Access' },
    { src: '/portfolio/images/logos/wordpress.svg', alt: 'WordPress' },
    { src: '/portfolio/images/logos/odoo.svg', alt: 'Odoo' },
    { src: '/portfolio/images/logos/excel.svg', alt: 'Excel' },
    { src: '/portfolio/images/logos/javascript.svg', alt: 'JavaScript' },
  ];
  const infiniteLogos = [...skillLogos, ...skillLogos];
  const infiniteLogosReverse = [...[...skillLogos].reverse(), ...[...skillLogos].reverse()];

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
                  href="https://drive.google.com/file/d/1aIEM-ixpNCKAr-p7YwiHRRGj21u16HbR/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium text-base lg:text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-white group-hover:text-black">Ver CV</span>
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

            {/* Image (Hero) */}
            <div className="relative fade-in-right flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full"></div>
                <div className="w-full h-full rounded-full border border-white/10 overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Alexandre Carnero Hero"
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
          <div className="relative max-w-5xl mx-auto">
            {/* Overlay gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a35] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a35] to-transparent z-10"></div>
            {/* Marquee animado doble fila */}
            <div className="overflow-hidden w-full">
              <div className="flex flex-col gap-6">
                {/* Fila 1 */}
                <div className="flex gap-16 animate-marquee items-center py-4 
                  sm:gap-16 sm:py-4 gap-8 py-2">
                  {infiniteLogos.map((logo, idx) => (
                    <img key={idx} src={logo.src} alt={logo.alt} 
                      className="w-28 h-28 sm:w-28 sm:h-28 w-16 h-16 object-contain drop-shadow-lg" />
                  ))}
                </div>
                {/* Fila 2 inversa, solo visible en sm+ */}
                <div className="hidden sm:flex gap-16 animate-marquee-reverse items-center py-4">
                  {infiniteLogosReverse.map((logo, idx) => (
                    <img key={idx} src={logo.src} alt={logo.alt} className="w-28 h-28 object-contain drop-shadow-lg" />
                  ))}
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
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App; 