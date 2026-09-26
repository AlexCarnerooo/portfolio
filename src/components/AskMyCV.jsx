import { useEffect, useMemo, useRef, useState } from 'react'

// Fragmentos del CV que indexa el buscador. `keywords` no se muestra: solo
// amplía el vocabulario para que preguntas formuladas de otra forma encuentren el fragmento.
const passages = [
  // Formación
  { section: 'Formación', text: 'Soy graduado en Empresa y Tecnología por la Universidad de Santiago de Compostela (2022–2026).', keywords: 'estudios estudiar carrera grado universidad titulación formación USC' },
  { section: 'Formación', text: 'Obtuve Matrícula de Honor en Machine Learning (9,7/10). Mi Trabajo de Fin de Grado trata sobre álgebra lineal aplicada a la gestión de carteras.', keywords: 'notas TFG tesis aprendizaje automático estudios matrícula' },
  { section: 'Formación', text: 'Mis mejores notas: Big Data Technologies (10/10), Sistemas de Información para Finanzas con R (10/10) y Machine Learning (9,7/10). Media en asignaturas técnicas: 8,5/10.', keywords: 'notas asignaturas expediente media estudios' },
  { section: 'Formación', text: 'De septiembre de 2025 a enero de 2026 hice un Erasmus en la IMC University of Applied Sciences de Krems (Austria), con asignaturas de Startup Management y Computer Engineering.', keywords: 'estudios extranjero internacional austria erasmus' },

  // Experiencia
  { section: 'Experiencia', text: 'Actualmente trabajo en Indra como Cybersecurity & AI Analyst en el proyecto de Inditex, analizando los datos de seguridad de toda la compañía para evaluar su postura de ciberseguridad.', keywords: 'trabajo actual empresa ahora trabajas ciberseguridad indra inditex' },
  { section: 'Experiencia', text: 'En Indra uso Python y Snowflake para construir y mantener pipelines de datos de ciberseguridad, con Azure DevOps y CI/CD para el desarrollo y despliegue.', keywords: 'trabajo tecnologías datos ciberseguridad indra' },
  { section: 'Experiencia', text: 'De febrero a junio de 2026 hice prácticas como AI Engineer en Tesla Technologies, desarrollando modelos de machine learning de detección de amenazas y análisis de riesgos y contribuyendo a agentes LLM con LangGraph.', keywords: 'prácticas becario trabajo amenazas agentes' },
  { section: 'Experiencia', text: 'Como freelance B2B construí y vendí un sistema de scraping inmobiliario con Python y Selenium para generación de leads.', keywords: 'freelance clientes proyectos scraping inmobiliaria emprender vender' },
  { section: 'Experiencia', text: 'También he creado herramientas de automatización tipo SaaS con LLMs y n8n para inmobiliarias, inversores y asesorías.', keywords: 'automatización n8n saas freelance clientes proyectos' },
  { section: 'Experiencia', text: 'Fui instructor de judo de 2019 a 2025. Soy cinturón negro 2º Dan y he entrenado a deportistas de nivel nacional.', keywords: 'deporte judo hobbies aficiones entrenador liderazgo profesor' },

  // Premios
  { section: 'Premios', text: '1er premio en USC Lugo Emprende, una competición de emprendimiento de la Universidad de Santiago de Compostela.', keywords: 'premios ganado ganaste competiciones logros emprendimiento' },
  { section: 'Premios', text: '1er puesto en el Hack Day USC-LOF con un proyecto de festivales sostenibles.', keywords: 'hackathon premios ganado ganaste logros' },
  { section: 'Premios', text: '1er puesto internacional en Terra Creative Jam por innovación en oportunidades rurales, y 2º puesto internacional en la Creative Jam de Rural Youth of Europe en Malta.', keywords: 'hackathon premios ganado ganaste internacional logros' },
  { section: 'Premios', text: 'Ganador local y finalista nacional en Santander X Explorer, y ganador regional y finalista nacional en el programa de innovación de Grupo Hotusa.', keywords: 'premios ganado ganaste emprendimiento logros' },
  { section: 'Premios', text: 'La Comisión Europea me seleccionó como EU Ambassador del programa ATLIC, donde también recibí el reconocimiento Blue Leader.', keywords: 'europa premios liderazgo logros' },

  // Habilidades
  { section: 'Habilidades', text: 'En IA trabajo con LLMs, RAG avanzado, sistemas multi-agente con LangChain y LangGraph, embeddings y Hugging Face.', keywords: 'tecnologías habilidades stack inteligencia artificial agentes' },
  { section: 'Habilidades', text: 'Para retrieval uso bases de datos vectoriales como Qdrant, ChromaDB y Pinecone, y BGE-M3 para recuperación multi-etapa y re-ranking.', keywords: 'rag vectores búsqueda tecnologías habilidades' },
  { section: 'Habilidades', text: 'En machine learning: aprendizaje supervisado y no supervisado, feature engineering, evaluación de modelos, PyTorch y TensorFlow.', keywords: 'tecnologías habilidades modelos' },
  { section: 'Habilidades', text: 'En datos trabajo con Python, Pandas, NumPy, SQL (PostgreSQL), Snowflake y procesos ETL/ELT.', keywords: 'tecnologías habilidades análisis' },
  { section: 'Habilidades', text: 'Herramientas: Git, GitHub, Linux, Docker, Azure DevOps, CI/CD y Grafana. En web: JavaScript, React, Next.js, HTML y CSS.', keywords: 'tecnologías habilidades desarrollo frontend' },

  // Otros
  { section: 'Idiomas', text: 'Hablo español y gallego (nativo), inglés B2 (Oxford, preparando el C1), portugués intermedio y alemán básico.', keywords: 'idiomas lenguas hablas' },
  { section: 'Internacional', text: 'He participado en Erasmus+ en Italia (Green Olives Europe) y Croacia (seminario Partnerships), y lideré un equipo internacional de voluntariado en Alemania.', keywords: 'voluntariado internacional viajes extranjero' },
  { section: 'Sobre mí', text: 'Soy de Ferrol, Galicia (España).', keywords: 'dónde vives ubicación ciudad eres' },
  { section: 'Contacto', text: 'Estoy abierto a nuevas oportunidades. Puedes escribirme a alexandrecarnerop@gmail.com o usar el formulario de contacto.', keywords: 'contacto disponible email correo oportunidades contratar' },
]

const suggestions = [
  '¿Dónde trabajas ahora?',
  '¿Qué estudiaste?',
  '¿Has construido agentes con LLMs?',
  '¿Qué premios has ganado?',
  '¿Qué idiomas hablas?',
]

const stopwords = new Set('a al algo como con de del el en es esta este fue ha han has he la las le lo los me mi mis mas o para pero por que se si sin sobre son su sus te tu tus un una uno unos y ya yo cual cuales donde quien'.split(' '))

const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

// Stemming mínimo: truncar a 5 caracteres agrupa "estudiaste", "estudios", "estudiante"...
const stem = (w) => w.slice(0, 5)

const tokenize = (s) =>
  normalize(s)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !stopwords.has(w))
    .map(stem)

function buildIndex(docs) {
  const tokens = docs.map((d) => tokenize(`${d.text} ${d.keywords}`))
  const df = new Map()
  tokens.forEach((t) => new Set(t).forEach((w) => df.set(w, (df.get(w) || 0) + 1)))
  const avgLen = tokens.reduce((sum, t) => sum + t.length, 0) / tokens.length
  return { tokens, df, avgLen, n: docs.length }
}

function bm25(index, query, k1 = 1.5, b = 0.75) {
  const q = [...new Set(tokenize(query))]
  return index.tokens
    .map((doc, i) => {
      let score = 0
      q.forEach((term) => {
        const tf = doc.filter((w) => w === term).length
        if (!tf) return
        const df = index.df.get(term)
        const idf = Math.log(1 + (index.n - df + 0.5) / (df + 0.5))
        score += idf * (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * doc.length / index.avgLen))
      })
      return { i, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}

// Resalta en el texto las palabras que coinciden con la pregunta
function Highlighted({ text, terms }) {
  return text.split(/(\s+)/).map((part, i) => {
    const clean = normalize(part).replace(/[^a-z0-9]/g, '')
    return clean.length > 1 && terms.has(stem(clean)) ? (
      <mark key={i} className="bg-[#2dd4bf]/20 text-[#2dd4bf] rounded px-0.5">{part}</mark>
    ) : (
      part
    )
  })
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function AskMyCV() {
  const index = useMemo(() => buildIndex(passages), [])
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [searchedTerms, setSearchedTerms] = useState(new Set())
  const [typing, setTyping] = useState(false)
  const timer = useRef(null)
  const root = useRef(null)
  const started = useRef(false)

  const stopTyping = () => {
    clearInterval(timer.current)
    setTyping(false)
  }

  const search = (q) => {
    setSearchedTerms(new Set(tokenize(q)))
    setResults(bm25(index, q))
  }

  const typeAndSearch = (q) => {
    stopTyping()
    setResults(null)
    if (prefersReducedMotion()) {
      setQuery(q)
      search(q)
      return
    }
    setTyping(true)
    let n = 0
    setQuery('')
    timer.current = setInterval(() => {
      n += 1
      setQuery(q.slice(0, n))
      if (n >= q.length) {
        stopTyping()
        search(q)
      }
    }, 55)
  }

  // Escribe la primera pregunta sola cuando la sección entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          typeAndSearch(suggestions[0])
        }
      },
      { threshold: 0.4 }
    )
    if (root.current) observer.observe(root.current)
    return () => {
      observer.disconnect()
      clearInterval(timer.current)
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    stopTyping()
    if (query.trim()) search(query)
  }

  const top = results?.[0]?.score || 1

  return (
    <div ref={root} className="bg-[#20203a] rounded-xl border border-white/10 shadow-xl p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 mb-6">
        <h3 className="text-3xl sm:text-4xl font-bold text-white whitespace-nowrap">Pregúntale a mi CV</h3>
        <p className="text-gray-400 text-sm sm:text-base">
          Escribe una pregunta. Un buscador BM25 ordena {passages.length} fragmentos de mi CV aquí mismo, en tu navegador. Sin modelo de lenguaje: solo la parte de recuperación de un RAG.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex gap-3">
        <div className="relative flex-1">
          <input
            value={query}
            onChange={(e) => {
              stopTyping()
              setQuery(e.target.value)
            }}
            onFocus={stopTyping}
            placeholder="Pregunta algo sobre mí…"
            aria-label="Pregunta sobre mi CV"
            className="w-full bg-[#1a1a35] border border-white/15 rounded-lg px-4 py-3 text-white text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:border-[#2dd4bf]/60 transition-colors"
          />
          {typing && (
            // Copia invisible del texto para colocar el cursor parpadeante justo detrás
            <div aria-hidden="true" className="absolute inset-0 px-4 py-3 border border-transparent text-base sm:text-lg pointer-events-none whitespace-pre overflow-hidden">
              <span className="invisible">{query}</span>
              <span className="ask-cv-caret" />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="px-5 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
        >
          Buscar
        </button>
      </form>

      <div className="flex flex-wrap gap-2 mt-4">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => typeAndSearch(s)}
            className="px-3 py-1.5 text-xs sm:text-sm bg-[#2a2a4a] hover:bg-[#34345a] rounded-full text-white transition-colors"
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-6 min-h-[120px]" aria-live="polite">
        {results && results.length === 0 && (
          <p className="text-gray-400 pt-6 border-t border-white/10">
            No he encontrado nada sobre eso. Prueba con otras palabras o con una de las sugerencias.
          </p>
        )}
        {results?.map((r, rank) => (
          <div
            key={`${query}-${r.i}`}
            className="ask-cv-result flex gap-4 sm:gap-6 py-5 border-t border-white/10"
            style={{ animationDelay: `${rank * 120}ms` }}
          >
            <span className={`text-2xl font-bold w-6 shrink-0 ${rank === 0 ? 'text-[#2dd4bf]' : 'text-gray-500'}`}>
              {rank + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-gray-200 leading-relaxed">
                <Highlighted text={passages[r.i].text} terms={searchedTerms} />
              </p>
              <p className="text-gray-500 text-sm mt-1">{passages[r.i].section}</p>
            </div>
            <div className="hidden sm:block w-28 shrink-0 pt-1">
              <p className="text-gray-500 text-xs mb-1.5">BM25 {r.score.toFixed(2)}</p>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#2dd4bf] rounded-full" style={{ width: `${(r.score / top) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
