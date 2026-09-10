import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV } from '../data/site'
import { asset } from '../utils/asset'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${solid ? 'is-solid' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="brand" aria-label="Naren Groups home" onClick={() => setOpen(false)}>
          <img src={asset('/assets/logo.png')} alt="" className="brand__mark" />
          <span className="brand__word"><b>Naren</b><em>groups</em></span>
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} id="nav" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => (isActive ? { color: 'var(--red)' } : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__cta">
          <Link to="/contact" className="btn btn--red">Get a Quote</Link>
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
