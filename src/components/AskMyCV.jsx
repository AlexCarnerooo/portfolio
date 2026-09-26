import { useEffect, useMemo, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { cv } from '../i18n/cvPassages'

const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

// Stemming mínimo: truncar a 5 caracteres agrupa "estudiaste", "estudios", "estudiante"...
const stem = (w) => w.slice(0, 5)

const tokenize = (s, stopwords) =>
  normalize(s)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !stopwords.has(w))
    .map(stem)

// Índice BM25 de un idioma: las palabras vacías se normalizan igual que el texto
function buildIndex({ passages, stopwords }) {
  const stop = new Set(stopwords.split(' ').map(normalize))
  const tokens = passages.map((d) => tokenize(`${d.text} ${d.keywords}`, stop))
  const df = new Map()
  tokens.forEach((t) => new Set(t).forEach((w) => df.set(w, (df.get(w) || 0) + 1)))
  const avgLen = tokens.reduce((sum, t) => sum + t.length, 0) / tokens.length
  return { tokens, df, avgLen, n: passages.length, stop }
}

function bm25(index, query, k1 = 1.5, b = 0.75) {
  const q = [...new Set(tokenize(query, index.stop))]
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
  const { lang, t } = useLang()
  const { passages, suggestions } = cv[lang]
  const index = useMemo(() => buildIndex(cv[lang]), [lang])
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
    setSearchedTerms(new Set(tokenize(q, index.stop)))
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

  // Al cambiar de idioma, vuelve a escribir la primera sugerencia en el idioma nuevo
  const firstLang = useRef(lang)
  useEffect(() => {
    if (lang === firstLang.current) return
    firstLang.current = lang
    if (started.current) typeAndSearch(suggestions[0])
    else setResults(null)
  }, [lang])

  const onSubmit = (e) => {
    e.preventDefault()
    stopTyping()
    if (query.trim()) search(query)
  }

  const top = results?.[0]?.score || 1

  return (
    <div ref={root} className="bg-[#20203a] rounded-xl border border-white/10 shadow-xl p-5 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 mb-6">
        <h3 className="text-2xl sm:text-4xl font-bold text-white sm:whitespace-nowrap">{t.ask.title}</h3>
        <p className="text-gray-400 text-sm sm:text-base">
          {t.ask.intro(passages.length)}
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex gap-2 sm:gap-3">
        <div className="relative flex-1 min-w-0">
          <input
            value={query}
            onChange={(e) => {
              stopTyping()
              setQuery(e.target.value)
            }}
            onFocus={stopTyping}
            placeholder={t.ask.placeholder}
            aria-label={t.ask.inputLabel}
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
          className="px-4 sm:px-5 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
        >
          {t.ask.search}
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
            {t.ask.empty}
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
