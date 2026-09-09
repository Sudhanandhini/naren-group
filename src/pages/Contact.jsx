import PageHero from '../components/PageHero'
import useReveal from '../components/useReveal'
import EnquiryForm from '../components/EnquiryForm'
import { CONTACT, WA_LINK } from '../data/site'

export default function Contact() {
  useReveal('contact')

  return (
    <main>
      <PageHero
        bg="/assets/gallery-9.jpg"
        crumb="Contact"
        title="Let's build a stronger"
        accent="boundary for your property."
        lead="Tell us about your site and requirement. We'll respond quickly with the right solution — from quotation to installation."
      />

      {/* CONTACT + FORM */}
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[.95fr_1.05fr] items-start">
          {/* left: details */}
          <div className="rv">
            <span className="eyebrow">Reach us</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2 mb-8">We're one message away.</h2>

            <div className="grid gap-4">
              <a href={`tel:+91${CONTACT.phones[0]}`} className="contact-card">
                <span className="contact-card__ico">📞</span>
                <div>
                  <small className="block uppercase tracking-[.08em] text-[.72rem] text-steel mb-1">Call us</small>
                  <div className="font-semibold text-ink">{CONTACT.phones[0]} · {CONTACT.phones[1]}</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="contact-card">
                <span className="contact-card__ico">✉️</span>
                <div>
                  <small className="block uppercase tracking-[.08em] text-[.72rem] text-steel mb-1">Email</small>
                  <div className="font-semibold text-ink break-all">{CONTACT.email}</div>
                </div>
              </a>
              <div className="contact-card">
                <span className="contact-card__ico">📍</span>
                <div>
                  <small className="block uppercase tracking-[.08em] text-[.72rem] text-steel mb-1">Head office</small>
                  <div className="font-semibold text-ink">{CONTACT.office}</div>
                  <div className="text-steel text-sm mt-1">GST: {CONTACT.gst}</div>
                </div>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="contact-card" style={{ borderLeftColor: '#25d366' }}>
                <span className="contact-card__ico" style={{ color: '#25d366' }}>
                  <svg viewBox="0 0 32 32" width="22" height="22" fill="#25d366"><path d="M16 3a13 13 0 0 0-11 19.6L3 29l6.6-2A13 13 0 1 0 16 3zm7.6 18.4c-.3.9-1.8 1.7-2.5 1.8-.6.1-1.5.2-2.4-.2-.6-.2-1.3-.4-2.3-.9-4-1.7-6.6-5.8-6.8-6.1-.2-.3-1.6-2.1-1.6-4s1-2.8 1.3-3.2c.3-.4.7-.5 1-.5h.7c.2 0 .5 0 .8.6l1.1 2.7c.1.2.2.5 0 .8l-.5.7c-.2.2-.4.5-.2.9.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3.1 1.9.3.1.6.1.8-.1.2-.3 1-1.1 1.2-1.5.2-.4.5-.3.8-.2l2.6 1.3c.4.2.7.3.8.4.1.3.1.9-.1 1.5z" /></svg>
                </span>
                <div>
                  <small className="block uppercase tracking-[.08em] text-[.72rem] text-steel mb-1">WhatsApp</small>
                  <div className="font-semibold text-ink">Chat with us instantly</div>
                </div>
              </a>
            </div>
          </div>

          {/* right: form */}
          <div className="contact__form-wrap rv rv-2">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="rv max-w-[70ch]">
            <span className="eyebrow">Our manufacturing facilities</span>
            <div className="seam-rule mb-6" />
            <h2 className="h2">Three units, serving two states.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {CONTACT.facilities.map((f, idx) => (
              <div className={`feature-card rv rv-${idx + 1}`} key={f.city}>
                <span className="text-red font-bold tracking-[.12em] text-xs uppercase">Unit 0{idx + 1}</span>
                <h3 className="text-[1.3rem] font-semibold mt-2 mb-1">{f.city}</h3>
                <p className="text-steel font-medium mb-3">{f.area}</p>
                <p className="text-steel text-[.94rem] leading-relaxed">{f.serves}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
