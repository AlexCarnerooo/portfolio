import { pick, useLang } from '../i18n/LanguageContext'

const companyLogo = (file) => `${import.meta.env.BASE_URL}images/companies/${file}`

const jobs = [
  {
    role: 'Cybersecurity & AI Analyst',
    company: 'Indra',
    context: { en: 'Inditex project', es: 'Proyecto Inditex', gl: 'Proxecto Inditex' },
    logos: [
      { src: companyLogo('indra.webp'), alt: 'Indra' },
      { src: companyLogo('inditex.webp'), alt: 'Inditex' },
    ],
    dates: { en: 'Aug 2026 – present', es: 'Ago 2026 – ahora', gl: 'Ago 2026 – agora' },
    current: true,
    points: {
      en: [
        'I analyse cybersecurity data across the whole company to assess its security posture and provide a global view of its current state.',
        'I build and maintain data pipelines and transformations with Python and Snowflake.',
        'I contribute to cybersecurity analytics and AI use cases, using Azure DevOps and CI/CD for development and deployment.',
      ],
      es: [
        'Analizo los datos de ciberseguridad de toda la compañía para evaluar su postura de seguridad y ofrecer una visión global de su estado actual.',
        'Desarrollo y mantengo pipelines y transformaciones de datos con Python y Snowflake.',
        'Contribuyo a casos de uso de analítica de ciberseguridad e IA, con Azure DevOps y CI/CD para el desarrollo y despliegue.',
      ],
      gl: [
        'Analizo os datos de ciberseguridade de toda a compañía para avaliar a súa postura de seguridade e ofrecer unha visión global do seu estado actual.',
        'Desenvolvo e manteño pipelines e transformacións de datos con Python e Snowflake.',
        'Contribúo a casos de uso de analítica de ciberseguridade e IA, con Azure DevOps e CI/CD para o desenvolvemento e o despregamento.',
      ],
    },
    tags: ['Python', 'Snowflake', 'Azure DevOps', 'CI/CD'],
  },
  {
    role: 'Freelance AI Engineer',
    company: 'Nó lab',
    logos: [{ src: companyLogo('nolab.webp'), alt: 'Nó lab' }],
    context: { en: 'Own business, B2B', es: 'Negocio propio, B2B', gl: 'Negocio propio, B2B' },
    dates: { en: '2025 – present', es: '2025 – ahora', gl: '2025 – agora' },
    current: true,
    points: {
      en: [
        'Built and sold a real estate scraping system with Python and Selenium for B2B lead generation.',
        'I build SaaS-style automation tools with LLMs and n8n for real estate agencies, investors and advisory firms.',
      ],
      es: [
        'Construí y vendí un sistema de scraping inmobiliario con Python y Selenium para captación de leads B2B.',
        'Desarrollo herramientas de automatización tipo SaaS con LLMs y n8n para inmobiliarias, inversores y asesorías.',
      ],
      gl: [
        'Construín e vendín un sistema de scraping inmobiliario con Python e Selenium para captación de leads B2B.',
        'Desenvolvo ferramentas de automatización tipo SaaS con LLMs e n8n para inmobiliarias, investidores e asesorías.',
      ],
    },
    tags: ['Python', 'Selenium', 'LLMs', 'n8n'],
  },
  {
    role: 'AI Engineer',
    company: 'Tesla Technologies',
    logos: [{ src: companyLogo('tesla-technologies.webp'), alt: 'Tesla Technologies' }],
    context: { en: 'Internship', es: 'Prácticas', gl: 'Prácticas' },
    dates: { en: 'Feb 2026 – Jun 2026', es: 'Feb 2026 – Jun 2026', gl: 'Feb 2026 – Xuñ 2026' },
    points: {
      en: [
        'Developed machine learning models for threat detection and risk analysis.',
        'Contributed to the development of LLM agents with LangGraph.',
      ],
      es: [
        'Desarrollé modelos de machine learning para detección de amenazas y análisis de riesgos.',
        'Contribuí al desarrollo de agentes LLM con LangGraph.',
      ],
      gl: [
        'Desenvolvín modelos de machine learning para detección de ameazas e análise de riscos.',
        'Contribuín ao desenvolvemento de axentes LLM con LangGraph.',
      ],
    },
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
          className="w-10 h-10 -ml-0.5 mt-2.5 rounded-lg object-cover bg-white shadow-lg"
        />
      )}
    </div>
  )
}

export default function Experience() {
  const { lang, t } = useLang()
  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-[#1e1e3f] to-[#1a1a35]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">{t.experience.title}</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {t.experience.subtitle}
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
                        {job.context && <span className="text-gray-400 font-normal"> · {pick(job.context, lang)}</span>}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 whitespace-nowrap sm:pt-1">
                    {job.current && (
                      <span className="inline-block mr-2 px-2 py-0.5 text-xs rounded-full bg-[#2dd4bf]/15 text-[#2dd4bf] font-medium">
                        {t.experience.now}
                      </span>
                    )}
                    {pick(job.dates, lang)}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-gray-300 text-sm sm:text-base">
                  {pick(job.points, lang).map((point) => (
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
