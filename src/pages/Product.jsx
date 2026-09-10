import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../components/useReveal'
import { handleTilt, resetTilt } from '../components/tilt'
import { PRODUCTS, PROCESS, WA_LINK } from '../data/site'
import { asset } from '../utils/asset'

const ADV_ICONS = ['⚡', '🛡', '₹', '🧱', '✨', '🤝']

const TRUST_ITEMS = [
  '6,000+ Projects Completed',
  '3 Manufacturing Units',
  '25+ Days Curing Process',
  '2 States Served',
  'End-to-End Site Execution',
]

function ProductBlock({ product }) {
  return (
    <>
      {/* WHAT IT IS */}
      <section className="section" id={product.id}>
        <div className="wrap grid gap-14 lg:grid-cols-2 items-center">
          <figure className="rv product__visual tilt" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <span className="deco-orb deco-orb--a" aria-hidden="true" />
            <span className="deco-orb deco-orb--b" aria-hidden="true" />
            <img src={product.image} alt={product.imageAlt} style={{ borderRadius: 8 }} />
            <figcaption>{product.caption}</figcaption>
            <div className="about__badge about__badge--top">
              <span className="about__badge-num">{product.badgeNum}</span>
              <span className="about__badge-txt">{product.badgeTxt}<br /><small>{product.badgeSub}</small></span>
            </div>
          </figure>
          <div className="rv rv-2">
            <span className="eyebrow">{product.eyebrow} · How it's built</span>
            {/* <div className="seam-rule mb-6" /> */}
            <h2 className="h2 mb-4">{product.headline}</h2>
            <p className="text-[#3a3c40] mb-6">{product.lead}</p>
            <div className="grid gap-4 build-steps">
              {product.buildSteps.map(([t, d], i) => (
                <div className="flex gap-4 build-step" key={t} style={{ transitionDelay: `${i * 0.12}s` }}>
                  <span className="flex-none grid place-items-center w-9 h-9 rounded-lg bg-red text-white font-bold text-sm">{i + 1}</span>
                  <div><b className="block text-ink">{t}</b><p className="text-steel text-[.95rem]">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="rv max-w-[70ch]">
            <span className="eyebrow">{product.advantagesTitle}</span>
            {/* <div className="seam-rule mb-6" /> */}
            <h2 className="h2">Six reasons to choose {product.name.toLowerCase()}.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {product.advantages.map((a, idx) => (
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
            <span className="eyebrow">{product.useCasesLabel}</span>
            {/* <div className="seam-rule mb-6" /> */}
            <h2 className="h2">{product.name}, every use case.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {product.useCases.map((u, idx) => (
              <div className={`usecase-card rv rv-${(idx % 3) + 1} flex items-center gap-4 bg-white border border-line rounded-lg px-5 py-4 shadow-soft-sm hover:border-red`} key={u}>
                <span className="usecase-card__ico grid place-items-center w-10 h-10 rounded-full bg-concrete text-red font-bold">✓</span>
                <span className="font-medium">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function Product() {
  useReveal('product')

  return (
    <main>
      <PageHero
        bg={asset('/assets/product.jpg')}
        crumb="Products"
        title="Two products, done exceptionally well —"
        accent="the precast wall and the precast shed."
        lead="Factory-cast precast panels, engineered into a compound wall or a ready-made shed — a stronger, cleaner, quicker alternative to slow brick-and-mortar construction."
      />

      {/* PRODUCT NAV */}
      <div className="marquee" aria-label="Jump to product">
        <div className="marquee__track">
          {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
            <a href={`#${p.id}`} className="trust-pill" key={`${p.id}-${i}`}>
              <span className="trust-pill__dot" />{p.eyebrow} · {p.name}
            </a>
          ))}
        </div>
      </div>

      <ProductBlock product={PRODUCTS[0]} />

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

      <ProductBlock product={PRODUCTS[1]} />

      {/* PROCESS */}
      <section className="section section--soft process">
        <div className="wrap">
          <div className="rv">
            <span className="eyebrow">How we deliver</span>
            {/* <div className="seam-rule mb-6" /> */}
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
              <h2 className="h2 h2--light mb-2">Get an itemised quote for your wall or shed.</h2>
              <p className="text-steel-2 max-w-[52ch]">Tell us your requirement and site location — we'll respond quickly with the right solution.</p>
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
