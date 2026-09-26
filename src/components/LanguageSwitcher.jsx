import { LANGUAGES, useLang } from '../i18n/LanguageContext'

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, t } = useLang()

  return (
    <div role="group" aria-label={t.nav.language} className={`flex items-center text-xs sm:text-sm font-medium ${className}`}>
      {LANGUAGES.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && <span className="text-white/20 px-0.5 sm:px-1" aria-hidden="true">·</span>}
          <button
            type="button"
            lang={l.code}
            title={l.name}
            aria-label={l.name}
            aria-pressed={lang === l.code}
            onClick={() => setLang(l.code)}
            className={`px-1 py-1 rounded transition-colors ${
              lang === l.code ? 'text-white' : 'text-white/40 hover:text-white/80'
            }`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  )
}
