import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

const publicImage = (file) => `${import.meta.env.BASE_URL}images/${file}`

// Fotos del hero, en orden. La primera es la que se ve al cargar (y la que precarga index.html).
// `position` ajusta el encuadre dentro del círculo; `jpg` es opcional (respaldo para navegadores sin webp).
const photos = [
  { webp: 'hotusa_image.webp', jpg: 'hotusa_image.jpg', position: 'center 43%' },
  { webp: 'hero/hotusa-negro.webp', mobileWebp: 'hero/mobile_hotusa-negro.webp', position: 'center' },
  { webp: 'hero/blueguard.webp', mobileWebp: 'hero/mobile_blueguard.webp', position: 'center' },
]

// Posición de cada foto según su lugar en la pila (0 = delante)
const slots = [
  { transform: 'translate(0, 0) scale(1)', opacity: 1, filter: 'none', zIndex: 30 },
  { transform: 'translate(-22%, -10%) scale(0.84)', opacity: 0.55, filter: 'brightness(0.6) saturate(0.7)', zIndex: 20 },
  { transform: 'translate(22%, -14%) scale(0.74)', opacity: 0.4, filter: 'brightness(0.5) saturate(0.6)', zIndex: 10 },
]
const hidden = { transform: 'translate(0, -10%) scale(0.7)', opacity: 0, filter: 'brightness(0.5)', zIndex: 0 }

const INTERVAL = 5000

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function HeroPhotos() {
  const { t } = useLang()
  const [front, setFront] = useState(0)
  // Vueltas acumuladas de cada foto: al irse hacia atrás gira 360° sobre sí misma
  const [turns, setTurns] = useState(() => photos.map(() => 0))
  const [paused, setPaused] = useState(false)
  const multiple = photos.length > 1

  const next = () => {
    if (!multiple) return
    setTurns((prev) => prev.map((n, i) => (i === front && !prefersReducedMotion() ? n + 1 : n)))
    setFront((f) => (f + 1) % photos.length)
  }

  useEffect(() => {
    if (!multiple || paused || prefersReducedMotion()) return
    const id = setTimeout(next, INTERVAL)
    return () => clearTimeout(id)
  }, [front, paused])

  return (
    <button
      type="button"
      onClick={next}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      disabled={!multiple}
      aria-label={t.hero.nextPhoto}
      className="absolute inset-0 isolate rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] cursor-pointer disabled:cursor-default"
      style={{ perspective: '1200px' }}
    >
      {photos.map((photo, i) => {
        const place = (i - front + photos.length) % photos.length
        const slot = slots[place] || hidden
        return (
          <div
            key={photo.webp}
            aria-hidden={place !== 0}
            className="absolute inset-0 rounded-full border border-white/10 overflow-hidden shadow-2xl bg-[#1a1a35]"
            style={{
              transform: `${slot.transform} rotateY(${turns[i] * 360}deg)`,
              opacity: slot.opacity,
              filter: slot.filter,
              zIndex: slot.zIndex,
              transition: 'transform 1s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.8s ease, filter 0.8s ease',
            }}
          >
            <picture className="block w-full h-full">
              {photo.mobileWebp && <source srcSet={publicImage(photo.mobileWebp)} type="image/webp" media="(max-width: 600px)" />}
              <source srcSet={publicImage(photo.webp)} type="image/webp" />
              <img
                src={publicImage(photo.jpg || photo.webp)}
                alt={place === 0 ? 'Alexandre Carnero' : ''}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
                className="w-full h-full object-cover"
                style={{ objectPosition: photo.position }}
              />
            </picture>
          </div>
        )
      })}
    </button>
  )
}
