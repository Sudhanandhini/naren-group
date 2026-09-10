import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { WA_NUMBER } from '../data/site'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function EnquiryForm() {
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const enc = (v) => encodeURIComponent((v || '-').trim() || '-')

  const onSubmit = async (e) => {
    e.preventDefault()
    const f = e.target.elements
    const name = f.name.value.trim()
    const phone = f.phone.value.trim()
    if (!name) { setError('Please enter your name.'); f.name.focus(); return }
    if (!/^[0-9+\s-]{7,15}$/.test(phone)) { setError('Please enter a valid phone number.'); f.phone.focus(); return }
    setError('')

    const fields = {
      name,
      phone,
      location: f.location.value.trim() || '-',
      type: f.type.value,
      length: f.length.value.trim() || '-',
      message: f.message.value.trim() || '-',
      to_email: 'support@sunsys.in',
    }

    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      setSending(true)
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, fields, { publicKey: EMAILJS_PUBLIC_KEY })
      } catch (err) {
        console.error('EmailJS send failed', err)
      } finally {
        setSending(false)
      }
    }

    const msg =
      `New enquiry — Naren Groups%0A%0A` +
      `Name: ${enc(fields.name)}%0A` +
      `Phone: ${enc(fields.phone)}%0A` +
      `Location: ${enc(fields.location)}%0A` +
      `Project type: ${enc(fields.type)}%0A` +
      `Length: ${enc(fields.length)}%0A` +
      `Message: ${enc(fields.message)}`
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
      <button type="submit" className="btn btn--red btn--block" disabled={sending}>{sending ? 'Sending…' : 'Send on WhatsApp'}</button>
      <p className="form__error" role="alert">{error}</p>
    </form>
  )
}
