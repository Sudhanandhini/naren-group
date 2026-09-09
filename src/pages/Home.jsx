import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import {
  HERO_SLIDES, STATS, GALLERY, CLIENTS, VIDEOS,
  ADVANTAGES, USE_CASES, PROCESS, WA_LINK, YT_CHANNEL,
} from '../data/site'

/* ---------- Count-up number ---------- */
function Counter({ target, comma }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const run = () => {
      const dur = 1600, t0 = performance.now()
      const ease = (t) => 1 - Math.pow(1 - t, 3)
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1)
        const val = Math.round(target * ease(p))
        el.textContent = comma ? val.toLocaleString('en-IN') : val
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    if (!('IntersectionObserver' in window) || reduce) {
      el.textContent = comma ? target.toLocaleString('en-IN') : target
      return
    }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) { run(); io.unobserve(en.target) }
      })
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, comma])
  return <span className="count" ref={ref}>0</span>
}

/* ---------- Hero slider ---------- */
function Hero() {
  const [i, setI] = useState(0)
  const timer = useRef(null)
  const startX = useRef(0)
  const n = HERO_SLIDES.length
  const DELAY = 6000

  const go = (idx) => setI(((idx % n) + n) % n)

  const start = () => {
    stop()
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer.current = setInterval(() => setI((v) => (v + 1) % n), DELAY)
  }
  const stop = () => { if (timer.current) clearInterval(timer.current) }

  useEffect(() => { start(); return stop }, []) // eslint-disable-line

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - startX.current
        if (Math.abs(dx) > 45) { go(i + (dx < 0 ? 1 : -1)); start() }
      }}
    >
      <div className="hero__track">
        {HERO_SLIDES.map((src, idx) => (
          <div
            key={idx}
            className={`hero__slide ${idx === i ? 'is-active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>

      <div className="hero__content">
        <span className="eyebrow eyebrow--light">Ready-Made Precast Compound Walls</span>
        <h1 className="hero__title">Build a stronger <span>boundary</span> in days, not months.</h1>
        <p className="hero__sub">
          Precision-cast concrete walls for residential, commercial, industrial, agricultural and
          layout projects — engineered for strength, installed fast, and cured up to 25 days for a
          boundary that lasts.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--red btn--lg">Get a Free Quote</Link>
          <a className="btn btn--outline-light btn--lg" target="_blank" rel="noopener noreferrer" href={WA_LINK}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="wa">
              <path d="M16 3a13 13 0 0 0-11 19.6L3 29l6.6-2A13 13 0 1 0 16 3zm7.6 18.4c-.3.9-1.8 1.7-2.5 1.8-.6.1-1.5.2-2.4-.2-.6-.2-1.3-.4-2.3-.9-4-1.7-6.6-5.8-6.8-6.1-.2-.3-1.6-2.1-1.6-4s1-2.8 1.3-3.2c.3-.4.7-.5 1-.5h.7c.2 0 .5 0 .8.6l1.1 2.7c.1.2.2.5 0 .8l-.5.7c-.2.2-.4.5-.2.9.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3.1 1.9.3.1.6.1.8-.1.2-.3 1-1.1 1.2-1.5.2-.4.5-.3.8-.2l2.6 1.3c.4.2.7.3.8.4.1.3.1.9-.1 1.5z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      <button className="hero__arrow hero__arrow--prev" onClick={() => { go(i - 1); start() }} aria-label="Previous slide">‹</button>
      <button className="hero__arrow hero__arrow--next" onClick={() => { go(i + 1); start() }} aria-label="Next slide">›</button>
      <div className="hero__dots" role="tablist" aria-label="Slides">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-label={`Go to slide ${idx + 1}`}
            className={idx === i ? 'is-active' : ''}
            onClick={() => { go(idx); start() }}
          />
        ))}
      </div>
    </section>
  )
}

/* ---------- Video (lazy YouTube) ---------- */
function VideoTile({ id }) {
  const [playing, setPlaying] = useState(false)
  if (playing) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title="Naren Groups video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    <div
      className="video"
      role="button"
      tabIndex={0}
      aria-label="Play video"
      onClick={() => setPlaying(true)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPlaying(true) } }}
    >
      <img loading="lazy" src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="Naren Groups project video" />
      <span className="video__play"><span /></span>
    </div>
  )
}

/* ---------- Case studies sticky stack ---------- */
const CASE_STUDIES = [
  {
    n: '01', tag: 'Peresandra Unit', title: 'Precision casting at scale',
    company: 'Chikkaballapur Facility', category: 'Manufacturing',
    img: '/assets/gallery-3.jpg',
    challenge: 'Large layout developments needed thousands of running feet of boundary, fast, without compromising strength.',
    solution: 'We cast panels and reinforced posts in controlled batches and cured them up to 25 days for full load-bearing strength.',
    results: ['Thousands of ft cast per cycle', 'Up to 25-day controlled curing', 'Consistent panel finish'],
  },
  {
    n: '02', tag: 'Varthur Unit', title: 'Rapid on-site installation',
    company: 'Whitefield Facility', category: 'Installation',
    img: '/assets/gallery-7.jpg',
    challenge: 'Builders around Bangalore needed secured boundaries in days, not the months brick masonry demands.',
    solution: 'Trained crews delivered and assembled stacked-panel walls on site with anchor-bolt fixing and optional barbed-wire tops.',
    results: ['Boundary raised in days', 'Minimal on-site labour', 'Clean, uniform finish'],
  },
  {
    n: '03', tag: 'Dommasandra Unit', title: 'Serving Bangalore & Hosur',
    company: 'Sarjapura Facility', category: 'Logistics',
    img: '/assets/gallery-4.jpg',
    challenge: 'Projects spread across Karnataka and Tamil Nadu needed dependable transport and timely delivery.',
    solution: 'Three strategically located units keep material close to site, cutting transport time and protecting delivery schedules.',
    results: ['3 units across the region', '2 states served', 'On-time delivery'],
  },
  {
    n: '04', tag: 'Trusted by leaders', title: 'Boundaries for major brands',
    company: 'Foxconn · Sobha · Shahi', category: 'Enterprise',
    img: '/assets/gallery-9.jpg',
    challenge: 'Large enterprises and institutions needed secure, litigation-proof boundaries around critical property.',
    solution: 'End-to-end delivery — manufacturing, transport, installation and finishing — under one accountable team.',
    results: ['6,000+ projects completed', 'Enterprise-grade security', 'Single point of accountability'],
  },
]

function CaseStudies() {
  const stackRef = useRef(null)
  const [current, setCurrent] = useState('01')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const stack = stackRef.current
    if (!stack || !('IntersectionObserver' in window)) return
    const cards = Array.from(stack.querySelectorAll('[data-cs-card]'))
    const csEl = document.querySelector('.case-studies')
    const stickyTop = parseFloat(getComputedStyle(csEl).getPropertyValue('--cs-card-top')) || 96
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const pinned = entry.boundingClientRect.top <= stickyTop + 1
        entry.target.classList.toggle('is-pinned', pinned && entry.isIntersecting)
      })
      let active = 0
      cards.forEach((c, idx) => { if (c.classList.contains('is-pinned')) active = idx })
      setCurrent(String(active + 1).padStart(2, '0'))
    }, { threshold: [0, 1], rootMargin: '0px' })
    cards.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [])

  return (
    <section className="case-studies" aria-label="Infrastructure">
      <div className="case-studies__container">
        <header className="case-studies__header">
          <span className="eyebrow">Infrastructure</span>
          <h2 className="case-studies__title">
            Three manufacturing units, one accountable team — engineered strength delivered on time.
          </h2>
          <p className="case-studies__lede">
            A look at how Naren Groups casts, transports and installs precast compound walls across
            Karnataka and Tamil Nadu.
          </p>
        </header>

        <div className="case-studies__stack" ref={stackRef} data-cs-stack>
          <div className="case-studies__progress" aria-hidden="true">
            <div className="case-studies__progress-inner">
              <span className="case-studies__progress-current">{current}</span>
              <span className="case-studies__progress-divider">/</span>
              <span className="case-studies__progress-total">04</span>
            </div>
          </div>

          {CASE_STUDIES.map((c) => (
            <article className="case-study-card" data-cs-card key={c.n}>
              <div className="case-study-card__inner">
                <div className="case-study-card__media">
                  <img src={c.img} alt={c.title} />
                  <span className="case-study-card__category-tag">{c.tag}</span>
                </div>
                <div className="case-study-card__content">
                  <span className="case-study-card__number">{c.n}</span>
                  <h3 className="case-study-card__title">{c.title}</h3>
                  <div className="case-study-card__meta">
                    <span className="case-study-card__company">{c.company}</span>
                    <span className="case-study-card__category">{c.category}</span>
                  </div>
                  <div className="case-study-card__block">
                    <h4>Challenge</h4><p>{c.challenge}</p>
                  </div>
                  <div className="case-study-card__block">
                    <h4>Solution</h4><p>{c.solution}</p>
                  </div>
                  <div className="case-study-card__results">
                    <h4>Results</h4>
                    <ul>
                      {c.results.map((r) => (
                        <li key={r}><span className="check" aria-hidden="true">✓</span>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/product" className="case-study-card__cta">
                    View our product
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Reveal-on-scroll (home sections) ---------- */
function useHomeReveal() {
  useEffect(() => {
    const selectors = [
      '.about__text', '.about__side', '.product__head', '.product__grid',
      '.usecases', '.tl', '.gallery__item', '.clients .wrap', '.clients__showcase',
      '.videos__grid', '.contact__intro', '.contact__form-wrap', '.stat',
    ]
    const els = selectors.flatMap((s) => Array.from(document.querySelectorAll(s)))
    els.forEach((el) => el.classList.add('reveal'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function Home() {
  useHomeReveal()
  const clientCard = ({ file, name }) => (
    <div className="logo-card" key={file}>
      <img loading="lazy" src={`/assets/logo-${file}.png`} alt={name} title={name} />
    </div>
  )

  return (
    <main>
      <Hero />

      {/* STATS */}
      <section className="stats" aria-label="Company at a glance">
        <div className="wrap stats__grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__num">
                <Counter target={s.num} comma={s.comma} />
                {s.suffix && <em>{s.suffix}</em>}
              </span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CaseStudies />

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="wrap about__grid">
          <div className="about__text">
            <span className="eyebrow">About Naren Groups</span>
            <h2 className="about__tag">Naren Groups — <strong>Secure your property. Avoid litigation.</strong></h2>
            <h2 className="h2">Building stronger boundaries,<br />building better spaces.</h2>
            <p>
              Naren Groups is a trusted manufacturer and installer of ready-made precast compound
              walls, serving customers across <strong>Karnataka and Tamil Nadu</strong>. We deliver
              robust, precision-engineered concrete boundary solutions for residential, commercial,
              industrial, agricultural and layout projects.
            </p>
            <div className="vision">
              <div className="vision__card">
                <h3>Our Vision</h3>
                <p>To be South India's most dependable name in precast boundary solutions — securing today, safeguarding tomorrow.</p>
              </div>
              <div className="vision__card">
                <h3>Our Mission</h3>
                <p>Quality products, strong construction, faster execution and reliable service on every single project, big or small.</p>
              </div>
            </div>
          </div>
          <aside className="about__side">
            <img src="/assets/about.jpg" alt="Naren Groups precast compound wall signboard" className="about__img" />
            <div className="about__badge">
              <span className="about__badge-num">GST</span>
              <span className="about__badge-txt">29AQCPK0542M2ZP<br /><small>Registered &amp; verified</small></span>
            </div>
          </aside>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="section product">
        <div className="wrap">
          <div className="product__head">
            <span className="eyebrow">Our Product</span>
            <h2 className="h2">One product, done exceptionally well —<br /><span className="accent">the precast compound wall.</span></h2>
            <p className="product__lead">
              A ready-made precast compound wall is a system of factory-cast concrete slab panels
              stacked between reinforced vertical posts. It replaces slow brick-and-mortar boundaries
              with a stronger, cleaner, quicker alternative — assembled on site in a fraction of the time.
            </p>
          </div>
          <div className="product__grid">
            <figure className="product__visual">
              <img src="/assets/product.jpg" alt="Grey precast compound wall panels stacked between posts" />
              <figcaption>Standard stacked-panel precast wall</figcaption>
            </figure>
            <div className="advantages">
              <h3 className="advantages__title">Why precast beats brick</h3>
              <div className="advantages__grid">
                {ADVANTAGES.map((a) => (
                  <div className="adv" key={a.title}>
                    <span className="adv__ico">✓</span>
                    <div><b>{a.title}</b><p>{a.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="usecases">
            <span className="usecases__label">Built for every kind of boundary</span>
            <div className="usecases__row">
              {USE_CASES.map((u) => <span className="chip" key={u}>{u}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process">
        <div className="wrap">
          <span className="eyebrow">How we deliver</span>
          <h2 className="h2">From order to boundary in four steps.</h2>
          <ol className="timeline">
            {PROCESS.map((p) => (
              <li className="tl" key={p.n}>
                <div className="tl__marker"><span>{p.n}</span></div>
                <h3>{p.title}</h3><p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section section--soft gallery">
        <div className="wrap">
          <span className="eyebrow">Our Work</span>
          <h2 className="h2">Project gallery</h2>
          <p className="section__intro">A selection of completed and ongoing precast compound wall projects across Karnataka.</p>
          <div className="gallery__grid">
            {GALLERY.map((g, idx) => (
              <figure className={`gallery__item ${g.wide ? 'gallery__item--wide' : ''}`} key={idx}>
                <img loading="lazy" src={g.src} alt={g.alt} />
              </figure>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/gallery" className="btn btn--red">View full gallery</Link>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section section--soft clients">
        <div className="wrap">
          <span className="eyebrow">Our Valuable Clients</span>
          <h2 className="h2">Big brands prefer Naren Groups<br />to secure their properties.</h2>
          <p className="section__intro">From Foxconn's Apple factory to leading builders, hospitals and institutions — some of South India's largest boundaries are ours.</p>
        </div>
        <div className="marquee" aria-label="Client logos">
          <div className="marquee__track">{CLIENTS.map(clientCard)}{CLIENTS.map(clientCard)}</div>
        </div>
        <div className="marquee marquee--rev" aria-hidden="true">
          <div className="marquee__track">{[...CLIENTS].reverse().map(clientCard)}{[...CLIENTS].reverse().map(clientCard)}</div>
        </div>
        <div className="wrap clients__showcase">
          <img loading="lazy" src="/assets/clients-showcase.jpg" alt="Grid of Naren Groups clients with project acreage" />
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="section videos">
        <div className="wrap">
          <span className="eyebrow">Video Gallery</span>
          <h2 className="h2">See the walls go up.</h2>
          <p className="section__intro">Completed projects, ongoing installations and customer stories from our YouTube channel.</p>
          <div className="videos__grid">
            {VIDEOS.slice(0, 6).map((id) => <VideoTile key={id} id={id} />)}
          </div>
          <a className="btn btn--red" href={YT_CHANNEL} target="_blank" rel="noopener noreferrer">Visit our YouTube channel</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section--soft contact">
        <div className="wrap contact__grid">
          <div className="contact__intro">
            <span className="eyebrow">Contact Us</span>
            <h2 className="h2">Let's build a stronger<br />boundary for your property.</h2>
            <p>Tell us about your site and requirement. We'll respond quickly with the right solution — from quotation to installation.</p>
            <ul className="contact__list">
              <li>
                <span className="contact__ico">📞</span>
                <div><small>Call us</small><a href="tel:+919003453586">9003453586</a> · <a href="tel:+919380001677">9380001677</a></div>
              </li>
              <li>
                <span className="contact__ico">✉️</span>
                <div><small>Email</small><a href="mailto:narengroupsindia@gmail.com">narengroupsindia@gmail.com</a></div>
              </li>
              <li>
                <span className="contact__ico">📍</span>
                <div><small>Head office</small>Nandini Layout, 2nd Cross, Bangalore, Karnataka</div>
              </li>
            </ul>
            <div className="facilities">
              <h3>Manufacturing facilities</h3>
              <div className="facilities__row">
                <div className="facility"><strong>Chikkaballapur</strong><span>Peresandra</span></div>
                <div className="facility"><strong>Whitefield</strong><span>Varthur</span></div>
                <div className="facility"><strong>Sarjapura</strong><span>Dommasandra</span></div>
              </div>
            </div>
          </div>
          <div className="contact__form-wrap">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  )
}
