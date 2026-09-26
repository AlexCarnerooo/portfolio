import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

const publicImage = (file) => `${import.meta.env.BASE_URL}images/${file}`

// Inclinación de reposo de la tarjeta (la que tenía el diseño original)
const REST_ANGLE = -15
// Punto del que cuelga la tarjeta (parte superior de la pinza), relativo al contenedor de 270px
const PIVOT_X = 186
const PIVOT_Y = -64

const stack = ['Python', 'LangGraph', 'LangChain', 'RAG', 'FastAPI']

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function IdCard() {
  const { t } = useLang()
  const wrapper = useRef(null)
  const swing = useRef(null)
  const [flipped, setFlipped] = useState(false)
  // Estado físico en un ref: se actualiza en cada frame sin re-renderizar
  const physics = useRef({ angle: 0, vel: 0, dragging: false, raf: null })
  const drag = useRef(null)

  const tick = () => {
    const s = physics.current
    if (!s.dragging) {
      // Muelle amortiguado hacia la posición de reposo
      s.vel += -s.angle * 0.012
      s.vel *= 0.975
      s.angle += s.vel
    }
    if (swing.current) swing.current.style.transform = `rotate(${REST_ANGLE + s.angle}deg)`
    const moving = s.dragging || Math.abs(s.vel) > 0.005 || Math.abs(s.angle) > 0.005
    s.raf = moving ? requestAnimationFrame(tick) : null
  }

  const push = (velocity) => {
    if (prefersReducedMotion()) return
    physics.current.vel += velocity
    if (!physics.current.raf) physics.current.raf = requestAnimationFrame(tick)
  }

  // Pequeño balanceo al aparecer en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          push(1.6)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (wrapper.current) observer.observe(wrapper.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(physics.current.raf)
    }
  }, [])

  // Ángulo del puntero respecto a la vertical que pasa por la pinza
  const pointerAngle = (e) => {
    // El contenedor puede estar escalado (móvil): se lleva el pivote a la escala real
    const rect = wrapper.current.getBoundingClientRect()
    const scale = rect.width / 270
    const dx = e.clientX - (rect.left + PIVOT_X * scale)
    const dy = e.clientY - (rect.top + PIVOT_Y * scale)
    return (Math.atan2(dx, dy) * 180) / Math.PI
  }

  const onPointerDown = (e) => {
    if (e.target.closest('a, button')) return
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = {
      x: e.clientX,
      y: e.clientY,
      moved: false,
      startPointer: pointerAngle(e),
      startAngle: physics.current.angle,
      last: physics.current.angle,
    }
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d) return
    if (!d.moved && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 5) return
    if (prefersReducedMotion()) return
    d.moved = true
    const s = physics.current
    s.dragging = true
    const angle = Math.max(-60, Math.min(60, d.startAngle - (pointerAngle(e) - d.startPointer)))
    s.vel = angle - d.last
    d.last = angle
    s.angle = angle
    if (!s.raf) s.raf = requestAnimationFrame(tick)
  }

  const onPointerUp = () => {
    const d = drag.current
    drag.current = null
    if (!d) return
    physics.current.dragging = false
    if (!d.moved) {
      // Clic sin arrastrar: girar la tarjeta y darle un pequeño balanceo
      setFlipped((f) => !f)
      push(flipped ? -0.8 : 0.8)
    }
  }

  const onPointerCancel = () => {
    drag.current = null
    physics.current.dragging = false
  }

  const onKeyDown = (e) => {
    if (e.target !== e.currentTarget) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setFlipped((f) => !f)
      push(0.8)
    }
  }

  const face = 'absolute inset-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-black via-[#23232e] to-[#23232e] [backface-visibility:hidden]'

  return (
    <div className="flex flex-col items-center pt-20 pb-8 select-none">
      {/* Al girar desde la pinza, el dibujo queda desplazado ~66px a la derecha y ocupa ~357px:
          se recentra con translate y en móvil se reduce para que quepa en pantallas de 320px */}
      <div
        ref={wrapper}
        className="w-[270px] h-[370px] relative origin-top -translate-x-[53px] scale-[0.8] -mb-[74px] sm:-translate-x-[66px] sm:scale-100 sm:mb-0"
      >
        <div
          ref={swing}
          className="w-full h-full"
          style={{ transform: `rotate(${REST_ANGLE}deg)`, transformOrigin: `${PIVOT_X}px ${PIVOT_Y}px` }}
        >
          <div
            role="button"
            tabIndex={0}
            aria-pressed={flipped}
            aria-label={flipped ? t.card.showFront : t.card.showBack}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onPointerEnter={(e) => e.pointerType === 'mouse' && !drag.current && push(e.movementX >= 0 ? -0.5 : 0.5)}
            onKeyDown={onKeyDown}
            className="relative z-0 w-full h-full cursor-grab active:cursor-grabbing [touch-action:pan-y] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] rounded-xl"
            style={{
              transformStyle: 'preserve-3d',
              transform: `perspective(1200px) rotateY(${flipped ? 180 : 0}deg)`,
              transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
            }}
          >
            {/* Cara delantera */}
            <div className={face}>
              <div className="w-full h-[180px] bg-white">
                <picture className="block w-full h-full">
                  <source srcSet={publicImage('mobile_presentandoAtlic.webp')} type="image/webp" media="(max-width: 600px)" />
                  <source srcSet={publicImage('presentandoAtlic.webp')} type="image/webp" />
                  <img
                    src={publicImage('presentandoAtlic.jpg')}
                    alt="Alex Carnero"
                    draggable={false}
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              </div>
              <div className="absolute bottom-24 left-0 w-full px-6">
                <h3 className="text-2xl font-bold text-white leading-tight">Alexandre Carnero</h3>
                <p className="text-base font-semibold text-[#2dd4bf]">AI Engineer · Cybersecurity <span className="whitespace-nowrap">@ Indra</span></p>
              </div>
              <div className="absolute bottom-8 left-0 w-full flex flex-col items-center">
                <div className="w-48 h-[2px] bg-[#2dd4bf] mb-2 opacity-80"></div>
                <span className="text-xs text-white/80 tracking-wide">alexandrecarnerop@gmail.com</span>
              </div>
            </div>

            {/* Cara trasera */}
            <div className={`${face} [transform:rotateY(180deg)] px-5 py-5 flex flex-col`}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#2dd4bf]">Access pass</p>
              <h3 className="text-lg font-bold text-white leading-tight mt-1">Alexandre Carnero</h3>
              <div className="w-full h-[2px] bg-[#2dd4bf] opacity-80 my-2.5"></div>

              <p className="text-[11px] uppercase tracking-wider text-gray-500">{t.card.now}</p>
              <p className="text-[13px] leading-snug text-white mb-2">Cybersecurity & AI Analyst @ Indra</p>

              <p className="text-[11px] uppercase tracking-wider text-gray-500">{t.card.base}</p>
              <p className="text-[13px] leading-snug text-white mb-2">Ferrol, Galicia</p>

              <p className="text-[11px] uppercase tracking-wider text-gray-500">{t.card.languages}</p>
              <p className="text-[13px] leading-snug text-white mb-2">{t.card.languagesValue}</p>

              <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[11px] bg-[#2a2a4a] rounded-full text-white">{tech}</span>
                ))}
              </div>

              <div className="mt-auto pt-3 flex items-center justify-between">
                <a
                  href={`${import.meta.env.BASE_URL}curriculum.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-white text-white rounded-lg text-xs font-medium hover:bg-white/10 transition-all"
                >
                  {t.card.downloadCv}
                </a>
                <div className="flex gap-3">
                  <a href="https://linkedin.com/in/alexandre-carnero-1a1561283" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </a>
                  <a href="https://github.com/AlexCarnerooo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pinza: gira junto con la tarjeta */}
          <div className="absolute -top-[4rem] right-6 z-30 pointer-events-none" aria-hidden="true">
            <svg width="120" height="80" viewBox="0 0 120 80" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>
              <rect x="52" y="0" width="16" height="32" rx="8" fill="#b0b0b0" />
              <rect x="56" y="28" width="8" height="16" rx="4" fill="#888" />
              <rect x="58" y="40" width="4" height="16" rx="2" fill="#444" />
              <path d="M60 56 Q60 70 20 78" stroke="#b0b0b0" strokeWidth="6" fill="none" />
              <path d="M60 56 Q60 70 100 78" stroke="#b0b0b0" strokeWidth="6" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-10 text-xs text-gray-500 flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        {t.card.hint}
      </p>
    </div>
  )
}
