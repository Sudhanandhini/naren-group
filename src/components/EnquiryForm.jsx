import { useState } from 'react'

export default function EnquiryForm() {
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

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
      length: f.runLength.value.trim() || '-',
      message: f.message.value.trim() || '-',
    }

    setSending(true)
    setStatus('')
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/send-enquiry.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('Thanks! Your enquiry has been sent — we\'ll get back to you shortly.')
        e.target.reset()
      } else {
        setStatus('Something went wrong sending your enquiry. Please call us instead.')
      }
    } catch (err) {
      console.error('[enquiry] send failed', err)
      setStatus('Something went wrong sending your enquiry. Please call us instead.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <h3 className="form__title">Online Enquiry</h3>
      <p className="form__note">Fill in your details and we'll get back to you shortly.</p>
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
      <button type="submit" className="btn btn--red btn--block" disabled={sending}>{sending ? 'Sending…' : 'Submit'}</button>
      <p className="form__error" role="alert">{error}</p>
      {status && <p style={{ marginTop: '.5rem', fontSize: '.85rem', color: '#ccc' }}>{status}</p>}
    </form>
  )
}
