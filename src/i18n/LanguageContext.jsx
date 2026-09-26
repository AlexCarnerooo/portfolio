import { createContext, useContext, useEffect, useState } from 'react'
import { ui } from './ui'

export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'gl', label: 'GL', name: 'Galego' },
]

const DEFAULT_LANG = 'en'
const STORAGE_KEY = 'portfolio-lang'

const isLang = (code) => LANGUAGES.some((l) => l.code === code)

// Prioridad: ?lang= en la URL (para compartir enlaces en un idioma concreto),
// después la elección guardada del visitante y, si no hay ninguna, inglés.
function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // almacenamiento bloqueado: seguimos con el idioma por defecto
  }
  return DEFAULT_LANG
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sin almacenamiento, el idioma solo dura esta visita
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: ui[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)

// Elige la versión de un texto definido como { en, es, gl }
export const pick = (value, lang) => (value && typeof value === 'object' ? value[lang] : value)
