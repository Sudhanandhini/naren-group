import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../components/useReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { handleTilt, resetTilt } from '../components/tilt'
import { CONTACT, STATS, WA_LINK } from '../data/site'
import { asset } from '../utils/asset'

const VALUES = [
  { ico: '◈', title: 'Our Vision', text: "To be South India's most dependable name in precast boundary solutions — securing today, safeguarding tomorrow." },
  { ico: '◆', title: 'Our Mission', text: 'Quality products, strong construction, faster execution and reliable service on every single project, big or small.' },
  { ico: '❖', title: 'Our Promise', text: 'A compound wall is the first line of security for your property. We build it to last, and we stand behind it.' },
]

const COMPARE = [
  { label: 'Installation time', precast: 'Days', brick: 'Weeks' },
  { label: 'Labour dependency', precast: 'Small crew', brick: 'Large masonry crew' },
  { label: 'Finish quality', precast: 'Uniform, factory-cured', brick: 'Site-dependent' },
  { label: 'Maintenance', precast: 'Low', brick: 'Periodic plastering & painting' },
  { label: 'Weather resistance', precast: 'High — 25-day curing', brick: 'Moderate' },
]

export default function About() {
  useReveal('about')

  return (
    <main>
      <PageHero
        bg={asset('/assets/about.jpg')}
        crumb="About"
        title="Building stronger boundaries,"
        accent="building better spaces."
        lead="Naren Groups is a trusted manufacturer and installer of ready-made precast compound walls, serving customers across Karnataka and Tamil Nadu."
      />

      {/* STORY */}
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_.9fr] items-center">
          <div className="rv">
            <span className="eyebrow">Who we are</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2 mb-5">Secure your property.<br />Avoid litigation.</h2>
            <p className="text-[#3a3c40] mb-4">
              We specialise in delivering robust, precision-engineered precast concrete boundary wall
              solutions for residential, commercial, industrial, agricultural and layout development
              projects. Our walls are manufactured using premium-quality raw materials and scientifically
              controlled curing to ensure exceptional strength, durability and a long service life.
            </p>
            <p className="text-[#3a3c40]">
              Compared to conventional brick masonry, our precast solutions provide significantly faster
              installation, reduced labour dependency, minimal maintenance and a clean, professional finish —
              with comprehensive end-to-end service from manufacturing and transport to installation and
              complete site execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/product" className="btn btn--red">Explore our product</Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ border: '2px solid var(--line)' }}>Talk to us</a>
            </div>
          </div>

          <aside className="about__side rv rv-2 tilt" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <span className="deco-orb deco-orb--a" aria-hidden="true" />
            <span className="deco-orb deco-orb--b" aria-hidden="true" />
            <img src={asset('/assets/clients-showcase.jpg')} alt="Naren Groups client project grid" className="about__img" />
            <div className="about__badge">
              <span className="about__badge-num">GST</span>
              <span className="about__badge-txt">{CONTACT.gst}<br /><small>Registered &amp; verified</small></span>
            </div>
          </aside>
        </div>
      </section>

      {/* PRECAST VS BRICK */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="rv max-w-[70ch]">
            <span className="eyebrow">Why precast wins</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">Precast vs. traditional brick masonry.</h2>
          </div>
          <div className="compare rv rv-2">
            <div className="compare__col compare__col--us">
              <h3 className="compare__head">Naren Precast Walls</h3>
              <ul>
                {COMPARE.map((c) => (
                  <li key={c.label}>
                    <span className="compare__ico compare__ico--yes">✓</span>
                    {c.label} <strong>{c.precast}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="compare__vs">VS</div>
            <div className="compare__col compare__col--them">
              <h3 className="compare__head">Traditional Brick</h3>
              <ul>
                {COMPARE.map((c) => (
                  <li key={c.label}>
                    <span className="compare__ico compare__ico--no">✕</span>
                    {c.label} <strong>{c.brick}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="wrap">
          <div className="rv max-w-[70ch]">
            <span className="eyebrow">What drives us</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">More than a boundary — a commitment to security.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {VALUES.map((v, idx) => (
              <div className={`feature-card rv rv-${idx + 1}`} key={v.title}>
                <span className="feature-card__num">{String(idx + 1).padStart(2, '0')}</span>
                <div className="feature-card__ico">{v.ico}</div>
                <h3 className="text-[1.15rem] font-semibold mb-2">{v.title}</h3>
                <p className="text-steel text-[.98rem] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING STRENGTH */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="rv max-w-[70ch]">
            <span className="eyebrow">Our manufacturing strength</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">Three units. Two states. One standard of quality.</h2>
            <p className="section__intro">
              Strategically located across Karnataka, our facilities let us execute both small- and
              large-scale projects with consistent quality and timely delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {CONTACT.facilities.map((f, idx) => (
              <div className={`feature-card rv rv-${idx + 1}`} key={f.city}>
                <span className="feature-card__num">{String(idx + 1).padStart(2, '0')}</span>
                <span className="text-red font-bold tracking-[.12em] text-xs uppercase">Unit 0{idx + 1}</span>
                <h3 className="text-[1.3rem] font-semibold mt-2 mb-1">{f.city}</h3>
                <p className="text-steel font-medium mb-3">{f.area}</p>
                <p className="text-steel text-[.94rem] leading-relaxed">{f.serves}</p>
                <span className="inline-flex items-center mt-4 text-[.78rem] font-semibold uppercase tracking-[.08em] text-steel">
                  <span className="unit-dot" />Operational
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY / CURING */}
      <section className="section section--dark">
        <div className="wrap grid gap-12 lg:grid-cols-2 items-center">
          <div className="rv">
            <span className="eyebrow" style={{ background: 'rgba(255,255,255,.08)' }}>Quality that lasts</span>
            <h2 className="h2 h2--light mt-4">Cured up to 25 days for real, lasting strength.</h2>
            <p className="text-steel-2 mt-4 mb-6 max-w-[56ch]">
              Every Naren Groups component undergoes a systematic curing process of up to 25 days to
              achieve the required strength and durability before installation. From casting and transport
              to installation and finishing, we deliver a complete, hassle-free solution.
            </p>
            {/* <ul className="grid gap-3">
              {['Premium-quality raw materials', 'Scientifically controlled curing', 'Trained installation crews', 'End-to-end site execution'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-concrete">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-red text-white text-xs font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul> */}
          </div>

          {/* animated stacked-panel motif */}
          <div className="rv rv-2 spec-wall bg-[#1c1d20] p-8">
            {/* <div className="spec-panel">
              {[0, 1, 2, 3, 4, 5].map((k) => (
                <div key={k} className="spec-panel__slab" style={{ animationDelay: `${k * 0.09}s` }} />
              ))}
            </div>
            <div className="spec-wall__post" style={{ left: 0 }} />
            <div className="spec-wall__post" style={{ right: 0 }} /> */}
                  <ul className="grid gap-3">
              {['Premium-quality raw materials', 'Scientifically controlled curing', 'Trained installation crews', 'End-to-end site execution'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-concrete">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-red text-white text-xs font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" aria-label="Company at a glance">
        <div className="wrap stats__grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__num">
                <AnimatedCounter value={s.num} comma={s.comma} />{s.suffix && <em>{s.suffix}</em>}
              </span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="rv cta-band rounded-xl bg-ink text-white text-center px-6 py-14 shadow-soft">
            <h2 className="h2 h2--light mb-3">Ready to secure your property?</h2>
            <p className="text-steel-2 max-w-[52ch] mx-auto mb-7">
              Get a clear, itemised quotation and a site visit from the nearest of our three units.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn btn--red btn--lg">Get a Free Quote</Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light btn--lg">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
