const companyLogo = (file) => `${import.meta.env.BASE_URL}images/companies/${file}`

const jobs = [
  {
    role: 'Cybersecurity & AI Analyst',
    company: 'Indra',
    context: 'Proyecto Inditex',
    logos: [
      { src: companyLogo('indra.webp'), alt: 'Indra' },
      { src: companyLogo('inditex.webp'), alt: 'Inditex' },
    ],
    dates: 'Ago 2026 – ahora',
    current: true,
    points: [
      'Analizo los datos de ciberseguridad de toda la compañía para evaluar su postura de seguridad y ofrecer una visión global de su estado actual.',
      'Desarrollo y mantengo pipelines y transformaciones de datos con Python y Snowflake.',
      'Contribuyo a casos de uso de analítica de ciberseguridad e IA, con Azure DevOps y CI/CD para el desarrollo y despliegue.',
    ],
    tags: ['Python', 'Snowflake', 'Azure DevOps', 'CI/CD'],
  },
  {
    role: 'Freelance AI Engineer',
    company: 'Nó lab',
    logos: [{ src: companyLogo('nolab.webp'), alt: 'Nó lab' }],
    context: 'Negocio propio, B2B',
    dates: '2025 – ahora',
    current: true,
    points: [
      'Construí y vendí un sistema de scraping inmobiliario con Python y Selenium para captación de leads B2B.',
      'Desarrollo herramientas de automatización tipo SaaS con LLMs y n8n para inmobiliarias, inversores y asesorías.',
    ],
    tags: ['Python', 'Selenium', 'LLMs', 'n8n'],
  },
  {
    role: 'AI Engineer',
    company: 'Tesla Technologies',
    logos: [{ src: companyLogo('tesla-technologies.webp'), alt: 'Tesla Technologies' }],
    context: 'Prácticas',
    dates: 'Feb 2026 – Jun 2026',
    points: [
      'Desarrollé modelos de machine learning para detección de amenazas y análisis de riesgos.',
      'Contribuí al desarrollo de agentes LLM con LangGraph.',
    ],
    tags: ['Machine Learning', 'LangGraph', 'Python'],
  },
]

// Logo de la empresa; el del cliente (si lo hay) asoma por detrás, desplazado para que se lea.
// Sin logo, iniciales como las del menú.
function CompanyLogos({ logos }) {
  if (!logos) {
    return (
      <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
        <span className="text-white font-bold">AC</span>
      </div>
    )
  }
  const [main, client] = logos
  return (
    <div className="flex items-start shrink-0">
      <img
        src={main.src}
        alt={main.alt}
        title={main.alt}
        loading="lazy"
        className="relative z-10 w-11 h-11 rounded-lg object-cover bg-white ring-2 ring-[#20203a] shadow-lg"
      />
      {client && (
        <img
          src={client.src}
          alt={client.alt}
          title={client.alt}
          loading="lazy"
          className="w-10 h-10 -ml-1.5 mt-2.5 rounded-lg object-cover bg-white shadow-lg"
        />
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-[#1e1e3f] to-[#1a1a35]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Experiencia</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Lo que estoy haciendo ahora y dónde he estado antes.
        </p>

        <ol className="relative max-w-4xl mx-auto border-l border-white/10 ml-3 sm:mx-auto space-y-8">
          {jobs.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative pl-6 sm:pl-10">
              {/* Punto de la línea de tiempo */}
              <span className="absolute -left-[7px] top-6 flex w-3.5 h-3.5">
                {job.current && (
                  <span className="absolute inline-flex w-full h-full rounded-full bg-[#2dd4bf] opacity-60 animate-ping"></span>
                )}
                <span className={`relative inline-flex w-3.5 h-3.5 rounded-full border-2 border-[#1e1e3f] ${job.current ? 'bg-[#2dd4bf]' : 'bg-gray-500'}`}></span>
              </span>

              <div className="bg-[#20203a] rounded-xl border border-white/10 shadow-xl p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-4">
                    <CompanyLogos logos={job.logos} />
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-[#2dd4bf] font-semibold">
                        {job.company}
                        {job.context && <span className="text-gray-400 font-normal"> · {job.context}</span>}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 whitespace-nowrap sm:pt-1">
                    {job.current && (
                      <span className="inline-block mr-2 px-2 py-0.5 text-xs rounded-full bg-[#2dd4bf]/15 text-[#2dd4bf] font-medium">
                        Ahora
                      </span>
                    )}
                    {job.dates}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-gray-300 text-sm sm:text-base">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="text-[#2dd4bf] mt-1.5 w-1 h-1 rounded-full bg-[#2dd4bf] shrink-0"></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-[#2a2a4a] rounded-full text-white">{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
