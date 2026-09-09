import { Link } from 'react-router-dom'

export default function PageHero({ bg, crumb, title, accent, lead }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" style={{ backgroundImage: `url('${bg}')` }} />
      <div className="page-hero__seams" />
      <div className="wrap page-hero__inner">
        <div className="page-hero__crumb">
          <Link to="/">Home</Link> <span>/</span> <span>{crumb}</span>
        </div>
        <h1 className="page-hero__title">
          {title} {accent && <span className="accent">{accent}</span>}
        </h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
      </div>
    </section>
  )
}
