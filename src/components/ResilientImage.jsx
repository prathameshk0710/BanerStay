import { useState } from 'react'

const fallbackImage =
  'https://images.unsplash.com/photo-1505692794400-5e0c4c86fed1?auto=format&fit=crop&w=1200&q=80'

function ResilientImage({ src, alt, className }) {
  const [attempt, setAttempt] = useState(0)
  const [useFallback, setUseFallback] = useState(false)

  const resolvedSrc = useFallback
    ? fallbackImage
    : attempt === 0
      ? src
      : `${src}${src.includes('?') ? '&' : '?'}retry=${attempt}`

  const handleError = () => {
    if (attempt < 2) {
      setAttempt((prev) => prev + 1)
    } else if (!useFallback) {
      setUseFallback(true)
    }
  }

  return (
    <img src={resolvedSrc} alt={alt} className={className} loading="lazy" onError={handleError} />
  )
}

export default ResilientImage

