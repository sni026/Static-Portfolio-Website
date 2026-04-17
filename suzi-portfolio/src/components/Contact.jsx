import './Contact.css'
import contactImg from '../assets/contact.jpg'
import { CONTACT_ITEMS } from '../constants'

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="content-container">
        <div className="contact-inner">

          {/* ── Left ── */}
          <div className="contact-left">
            <p className="eyebrow">— Contact</p>
            <h2 className="title">Let's Build Something Meaningful</h2>

            <ul className="contact-list" role="list">
              {CONTACT_ITEMS.map(({ id, icon, label, href }) => (
                <li key={id} className="contact-item">
                  <span className={`contact-item-badge contact-item-badge--${id}`}>
                    {icon && <img src={icon} alt={id} />}
                  </span>
                  {href
                    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-item-text">{label}</a>
                    : <span className="contact-item-text">{label}</span>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right — image ── */}
          <div className="contact-image-wrap">
            <img src={contactImg} alt="Contact" className="contact-image" />
          </div>

        </div>
      </div>
    </section>
  )
}
