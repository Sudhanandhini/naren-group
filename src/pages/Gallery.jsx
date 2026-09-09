import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../components/useReveal'
import { GALLERY, VIDEOS, YT_CHANNEL } from '../data/site'

function Lightbox({ index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  const open = index !== null
  return (
    <div className={`lb ${open ? 'open' : ''}`} onClick={onClose} aria-hidden={!open}>
      {open && (
        <>
          <button className="lb__x" onClick={onClose} aria-label="Close">×</button>
          <button className="lb__nav lb__nav--prev" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous">‹</button>
          <img src={GALLERY[index].src} alt={GALLERY[index].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb__nav lb__nav--next" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next">›</button>
        </>
      )}
    </div>
  )
}

function VideoTile({ id }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div
      className="video"
      role={playing ? undefined : 'button'}
      tabIndex={playing ? undefined : 0}
      aria-label={playing ? undefined : 'Play video'}
      onClick={() => !playing && setPlaying(true)}
      onKeyDown={(e) => { if (!playing && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setPlaying(true) } }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title="Naren Groups video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img loading="lazy" src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="Naren Groups project video" />
          <span className="video__play"><span /></span>
        </>
      )}
    </div>
  )
}

export default function Gallery() {
  const [lb, setLb] = useState(null)
  useReveal('gallery')

  const prev = () => setLb((i) => (i - 1 + GALLERY.length) % GALLERY.length)
  const next = () => setLb((i) => (i + 1) % GALLERY.length)

  return (
    <main>
      <PageHero
        bg="/assets/gallery-1.jpg"
        crumb="Gallery"
        title="Our work, up close —"
        accent="boundaries that last."
        lead="A selection of completed and ongoing precast compound wall projects across Karnataka and Tamil Nadu. Tap any image to view it larger."
      />

      {/* MASONRY GALLERY */}
      <section className="section">
        <div className="wrap">
          <div className="rv max-w-[70ch] mb-10">
            <span className="eyebrow">Project gallery</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">Real walls, real sites.</h2>
          </div>

          <div className="mgrid columns-1 sm:columns-2 lg:columns-3">
            {GALLERY.map((g, idx) => (
              <figure
                key={idx}
                className="rv"
                onClick={() => setLb(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Open image: ${g.alt}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLb(idx) } }}
              >
                <img loading="lazy" src={g.src} alt={g.alt} />
                <figcaption className="mgrid__cap">{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE FEATURE STRIP */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="rv max-w-[70ch] mb-10">
            <span className="eyebrow">Video gallery</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">See the walls go up.</h2>
            <p className="section__intro">Completed projects, ongoing installations and customer stories from our YouTube channel.</p>
          </div>

          <a className="yt-strip rv" href={YT_CHANNEL} target="_blank" rel="noopener noreferrer" aria-label="Visit the Naren Groups YouTube channel">
            <div className="yt-strip__thumb" style={{ backgroundImage: `url('https://i.ytimg.com/vi/${VIDEOS[0]}/hqdefault.jpg')` }}>
              <span className="yt-strip__play"><span /></span>
            </div>
            <div className="yt-strip__body">
              <div className="flex items-center gap-2 mb-3">
                <svg viewBox="0 0 32 32" width="30" height="30" fill="#ff0000"><path d="M31.7 9.6a4 4 0 0 0-2.8-2.8C26.4 6 16 6 16 6s-10.4 0-12.9.8A4 4 0 0 0 .3 9.6C-.4 12.1-.4 16-.4 16s0 3.9.7 6.4a4 4 0 0 0 2.8 2.8C5.6 26 16 26 16 26s10.4 0 12.9-.8a4 4 0 0 0 2.8-2.8c.7-2.5.7-6.4.7-6.4s0-3.9-.7-6.4zM12.8 20.6V11.4L20.7 16z" /></svg>
                <span className="uppercase tracking-[.1em] text-sm text-steel-2">YouTube · @narengroups</span>
              </div>
              <h3 className="text-white text-2xl font-medium mb-2">Watch our projects on YouTube</h3>
              <p className="text-steel-2 mb-5">Site walk-throughs, installation timelapses and finished boundaries from across South India.</p>
              <span className="btn btn--red">Visit our YouTube channel</span>
            </div>
          </a>

          {/* video grid */}
          <div className="videos__grid mt-10">
            {VIDEOS.slice(0, 6).map((id) => <VideoTile key={id} id={id} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="rv rounded-xl bg-ink text-white text-center px-6 py-14 shadow-soft">
            <h2 className="h2 h2--light mb-3">Like what you see?</h2>
            <p className="text-steel-2 max-w-[52ch] mx-auto mb-7">Let's build a boundary like these around your property.</p>
            <Link to="/contact" className="btn btn--red btn--lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <Lightbox index={lb} onClose={() => setLb(null)} onPrev={prev} onNext={next} />
    </main>
  )
}
