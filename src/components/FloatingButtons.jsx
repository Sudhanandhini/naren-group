import { WA_LINK, YT_CHANNEL } from '../data/site'

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        className="wa-float"
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3a13 13 0 0 0-11 19.6L3 29l6.6-2A13 13 0 1 0 16 3zm7.6 18.4c-.3.9-1.8 1.7-2.5 1.8-.6.1-1.5.2-2.4-.2-.6-.2-1.3-.4-2.3-.9-4-1.7-6.6-5.8-6.8-6.1-.2-.3-1.6-2.1-1.6-4s1-2.8 1.3-3.2c.3-.4.7-.5 1-.5h.7c.2 0 .5 0 .8.6l1.1 2.7c.1.2.2.5 0 .8l-.5.7c-.2.2-.4.5-.2.9.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3.1 1.9.3.1.6.1.8-.1.2-.3 1-1.1 1.2-1.5.2-.4.5-.3.8-.2l2.6 1.3c.4.2.7.3.8.4.1.3.1.9-.1 1.5z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        className="youtube-float"
        href={YT_CHANNEL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View YouTube channel"
        style={{ background: '#ff0000' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#fff">
          <path d="M31.7 9.6a4 4 0 0 0-2.8-2.8C26.4 6 16 6 16 6s-10.4 0-12.9.8A4 4 0 0 0 .3 9.6C-.4 12.1-.4 16-.4 16s0 3.9.7 6.4a4 4 0 0 0 2.8 2.8C5.6 26 16 26 16 26s10.4 0 12.9-.8a4 4 0 0 0 2.8-2.8c.7-2.5.7-6.4.7-6.4s0-3.9-.7-6.4zM12.8 20.6V11.4L20.7 16z" />
        </svg>
      </a>
    </>
  )
}
