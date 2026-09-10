import { useState } from 'react'
import { WA_NUMBER } from '../data/site'

export default function EnquiryForm() {
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const enc = (v) => encodeURIComponent((v || '-').trim() || '-')

  const onSubmit = (e) => {
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
      length: f.runLength.value.trim() || '-',
      message: f.message.value.trim() || '-',
    }

    // Fire-and-forget: awaiting here would delay window.open past the click's
    // user-gesture window and get it blocked as a popup by most browsers.
    const endpoint = `${import.meta.env.BASE_URL}api/send-enquiry.php`
    console.log('[enquiry] sending to', endpoint, fields)
    setStatus('Sending email…')
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fields),
    })
      .then(async (res) => {
        const body = await res.text()
        console.log('[enquiry] response', res.status, body)
        setStatus(res.ok ? 'Email sent ✓' : `Email failed (${res.status}): ${body}`)
      })
      .catch((err) => {
        console.error('[enquiry] fetch failed', err)
        setStatus(`Email request failed: ${err.message}`)
      })

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
      <label className="field"><span>Approx. running feet (optional)</span><input type="text" name="runLength" placeholder="e.g. 500 ft" /></label>
      <label className="field"><span>Message</span><textarea name="message" rows="3" placeholder="Tell us about your requirement" /></label>
      <button type="submit" className="btn btn--red btn--block">Submit</button>
      <p className="form__error" role="alert">{error}</p>
      {status && <p style={{ marginTop: '.5rem', fontSize: '.85rem', color: '#ccc' }}>{status}</p>}
    </form>
  )
}
