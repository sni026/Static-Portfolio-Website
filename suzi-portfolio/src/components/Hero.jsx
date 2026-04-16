import heroImg from '../assets/hero.png'
import heroMobileImg from '../assets/hero-mobile.png'
import './Hero.css'
import { SOCIALS, LOCATION, NAME, SUBTITLE, BIO1, BIO2, BIO3 } from '../constants'

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Full-bleed background photo */}
      <img src={heroImg} alt="" className="hero-bg hero-bg--desktop" aria-hidden="true" />
      <img src={heroMobileImg} alt="" className="hero-bg hero-bg--mobile" aria-hidden="true" />

      {/* Dark gradient overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hero-inner container">
        {/* Available badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          {LOCATION}
        </div>

        {/* Main headline */}
        <h1 className="hero-name">
          {NAME}<br />
          <span className="hero-name-dim">{SUBTITLE}</span>
        </h1>

        {/* Bio */}
        <p className="hero-bio">
          {BIO1}<br /><br />
          {BIO2}<br /><br />
          {BIO3}
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <a href="#projects" className="hero-btn hero-btn--primary" onClick={scrollToProjects}>
            Explore Projects
          </a>
          <a href="#contact" className="hero-btn hero-btn--ghost" onClick={scrollToContact}>
            Contact Me
          </a>
        </div>

        {/* Socials */}
        <div className="hero-socials">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="hero-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <img src={icon} alt="" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="hero-scroll-cue"
        aria-label="Scroll to About"
        onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
      >
        <span className="hero-scroll-arrow" aria-hidden="true" />
      </a>
    </section>
  )
}
