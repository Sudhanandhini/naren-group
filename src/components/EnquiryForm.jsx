import { useState } from 'react'
import { WA_NUMBER } from '../data/site'

export default function EnquiryForm() {
  const [error, setError] = useState('')
  const enc = (v) => encodeURIComponent((v || '-').trim() || '-')

  const onSubmit = (e) => {
    e.preventDefault()
    const f = e.target.elements
    const name = f.name.value.trim()
    const phone = f.phone.value.trim()
    if (!name) { setError('Please enter your name.'); f.name.focus(); return }
    if (!/^[0-9+\s-]{7,15}$/.test(phone)) { setError('Please enter a valid phone number.'); f.phone.focus(); return }
    setError('')
    const msg =
      `New enquiry — Naren Groups%0A%0A` +
      `Name: ${enc(name)}%0A` +
      `Phone: ${enc(phone)}%0A` +
      `Location: ${enc(f.location.value)}%0A` +
      `Project type: ${enc(f.type.value)}%0A` +
      `Length: ${enc(f.length.value)}%0A` +
      `Message: ${enc(f.message.value)}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener')
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <h3 className="form__title">Online Enquiry</h3>
      <p className="form__note">Submitting opens WhatsApp with your details pre-filled.</p>
      <div className="form__row">
        <label className="field"><span>Name</span><input type="text" name="name" required placeholder="Your name" /></label>
        <label className="field"><span>Phone</span><input type="tel" name="phone" required placeholder="10-digit mobile" /></label>
      </div>
      <label className="field"><span>Location / Site</span><input type="text" name="location" placeholder="City or area" /></label>
      <label className="field">
        <span>Project type</span>
        <select name="type" defaultValue="Residential / Villa">
          <option>Residential / Villa</option>
          <option>Commercial</option>
          <option>Industrial</option>
          <option>Agricultural / Farmland</option>
          <option>Layout development</option>
          <option>Other</option>
        </select>
      </label>
      <label className="field"><span>Approx. running feet (optional)</span><input type="text" name="length" placeholder="e.g. 500 ft" /></label>
      <label className="field"><span>Message</span><textarea name="message" rows="3" placeholder="Tell us about your requirement" /></label>
      <button type="submit" className="btn btn--red btn--block">Send on WhatsApp</button>
      <p className="form__error" role="alert">{error}</p>
    </form>
  )
}
