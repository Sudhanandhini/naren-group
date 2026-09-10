import { Link } from 'react-router-dom'
import { CONTACT, YT_CHANNEL, NAV } from '../data/site'
import { asset } from '../utils/asset'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="footer" className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Link to="/" className="brand brand--footer">
            <img src={asset('/assets/logo-footer.png')} alt="" className="brand__mark" />
            <span className="brand__word"><b>Naren</b><em>groups</em></span>
          </Link>
          <p className="footer__tag">
            Securing boundaries, protecting properties. Ready-made precast compound walls across
            Karnataka &amp; Tamil Nadu.
          </p>
          <div className="footer__social">
            <a href="https://www.facebook.com/narengroups" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h2.5l.5-3H13v-2c0-.6.4-1 1-1z" /></svg>
            </a>
            <a href="https://www.instagram.com/narengroups" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 8.6A3.4 3.4 0 1 0 12 15.4 3.4 3.4 0 0 0 12 8.6zm0 5.6a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4zM17.5 3H6.5A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21h11a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3zm2.3 14.5c0 1.3-1 2.3-2.3 2.3h-11c-1.3 0-2.3-1-2.3-2.3v-11c0-1.3 1-2.3 2.3-2.3h11c1.3 0 2.3 1 2.3 2.3zM17.8 6a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0z" /></svg>
            </a>
            <a href={YT_CHANNEL} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8zM10 15V9l5 3z" /></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          {NAV.filter((n) => n.to !== '/').map((n) => (
            <Link key={n.to} to={n.to}>{n.label}</Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Facilities</h4>
          {CONTACT.facilities.map((f) => (
            <span key={f.city}>{f.city} — {f.area}</span>
          ))}
          <h4 className="footer__col-h">Reach us</h4>
          {CONTACT.phones.map((p) => (
            <a key={p} href={`tel:+91${p}`}>{p}</a>
          ))}
        </div>

        <div className="footer__col footer__col--contact">
          <h4>Head office</h4>
          <p>Nandini Layout, 2nd Cross,<br />Bangalore, Karnataka</p>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <p className="footer__gst">GST: {CONTACT.gst}</p>
        </div>
      </div>
      <div className="footer__bar">
        <p>© {year} Naren Groups. All rights reserved.</p>
        <p>Secure your property. Avoid litigation.</p>
      </div>
    </footer>
  )
}
