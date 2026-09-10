import { useEffect, useState } from 'react'

export default function VideoPopup({ videoId, title, delaySeconds = 3 }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), delaySeconds * 1000)
    return () => clearTimeout(timer)
  }, [delaySeconds])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <div className="video-popup" role="dialog" aria-modal="true" aria-label={title} onClick={() => setOpen(false)}>
      <div className="video-popup__box" onClick={(e) => e.stopPropagation()}>
        <div className="video-popup__head">
          <h3>{title}</h3>
          <button className="video-popup__x" onClick={() => setOpen(false)} aria-label="Close">×</button>
        </div>
        <div className="video-popup__frame">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
