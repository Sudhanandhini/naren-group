import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../components/useReveal'
import { handleTilt, resetTilt } from '../components/tilt'
import { ADVANTAGES, USE_CASES, PROCESS, WA_LINK } from '../data/site'

const ADV_ICONS = ['⚡', '🛡', '₹', '🧱', '✨', '🤝']

const TRUST_ITEMS = [
  '6,000+ Projects Completed',
  '3 Manufacturing Units',
  '25+ Days Curing Process',
  '2 States Served',
  'End-to-End Site Execution',
]

export default function Product() {
  useReveal('product')

  return (
    <main>
      <PageHero
        bg="/assets/product.jpg"
        crumb="Product"
        title="One product, done exceptionally well —"
        accent="the precast compound wall."
        lead="Factory-cast concrete slab panels stacked between reinforced vertical posts — a stronger, cleaner, quicker alternative to slow brick-and-mortar boundaries."
      />

      {/* WHAT IT IS */}
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 items-center">
          <figure className="rv product__visual tilt" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <span className="deco-orb deco-orb--a" aria-hidden="true" />
            <span className="deco-orb deco-orb--b" aria-hidden="true" />
            <img src="/assets/product.jpg" alt="Grey precast compound wall panels stacked between posts" style={{ borderRadius: 8 }} />
            <figcaption>Standard stacked-panel precast wall</figcaption>
            <div className="about__badge about__badge--top">
              <span className="about__badge-num">25+</span>
              <span className="about__badge-txt">Days curing<br /><small>For lasting strength</small></span>
            </div>
          </figure>
          <div className="rv rv-2">
            <span className="eyebrow">How it's built</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2 mb-4">A system engineered for speed and strength.</h2>
            <p className="text-[#3a3c40] mb-6">
              Reinforced vertical posts are set along your boundary line, then precast concrete slab panels
              are stacked between them and locked in place. The result is a continuous, load-bearing wall
              assembled on site in a fraction of the time a masonry wall would take.
            </p>
            <div className="grid gap-4 build-steps">
              {[
                ['Reinforced posts', 'Cast with steel reinforcement for structural strength and a secure fixing point.'],
                ['Stacked slab panels', 'Factory-cast, uniform panels that stack cleanly between posts.'],
                ['Optional finishing', 'Painting and a barbed-wire top for added security and a professional look.'],
              ].map(([t, d], i) => (
                <div className="flex gap-4 build-step" key={t} style={{ transitionDelay: `${i * 0.12}s` }}>
                  <span className="flex-none grid place-items-center w-9 h-9 rounded-lg bg-red text-white font-bold text-sm">{i + 1}</span>
                  <div><b className="block text-ink">{t}</b><p className="text-steel text-[.95rem]">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="marquee" aria-label="Naren Groups at a glance">
        <div className="marquee__track">
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((t, i) => (
            <span className="trust-pill" key={`${t}-${i}`}>
              <span className="trust-pill__dot" />{t}
            </span>
          ))}
        </div>
      </div>

      {/* ADVANTAGES */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="rv max-w-[70ch]">
            <span className="eyebrow">Why precast beats brick</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">Six reasons builders switch to precast.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {ADVANTAGES.map((a, idx) => (
              <div className={`feature-card rv rv-${(idx % 3) + 1}`} key={a.title}>
                <span className="feature-card__num">{String(idx + 1).padStart(2, '0')}</span>
                <div className="feature-card__ico">{ADV_ICONS[idx]}</div>
                <h3 className="text-[1.1rem] font-semibold mb-1.5">{a.title}</h3>
                <p className="text-steel text-[.95rem] leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="wrap">
          <div className="rv max-w-[70ch]">
            <span className="eyebrow">Built for every kind of boundary</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">One wall, every property type.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {USE_CASES.map((u, idx) => (
              <div className={`usecase-card rv rv-${(idx % 3) + 1} flex items-center gap-4 bg-white border border-line rounded-lg px-5 py-4 shadow-soft-sm hover:border-red`} key={u}>
                <span className="usecase-card__ico grid place-items-center w-10 h-10 rounded-full bg-concrete text-red font-bold">✓</span>
                <span className="font-medium">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--soft process">
        <div className="wrap">
          <div className="rv">
            <span className="eyebrow">How we deliver</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">From order to boundary in four steps.</h2>
          </div>
          <ol className="timeline rv">
            {PROCESS.map((p) => (
              <li className="tl rv" key={p.n}>
                <div className="tl__marker"><span>{p.n}</span></div>
                <h3>{p.title}</h3><p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="rv cta-band rounded-xl bg-ink text-white grid gap-6 lg:grid-cols-[1.4fr_auto] items-center px-8 py-12 shadow-soft">
            <div>
              <h2 className="h2 h2--light mb-2">Get an itemised quote for your boundary.</h2>
              <p className="text-steel-2 max-w-[52ch]">Tell us the running feet and site location — we'll respond quickly with the right solution.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn--red btn--lg">Get a Quote</Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light btn--lg">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
