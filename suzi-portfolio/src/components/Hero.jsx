import heroImg from '../assets/hero.png'
import heroMobileImg from '../assets/hero-mobile.png'
import './Hero.css'
import { LOCATION, NAME, SUBTITLE, BIO } from '../constants'
import { splitIntoParagraphs } from '../utils'

const paragraphs = splitIntoParagraphs(BIO)

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
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
          {paragraphs.map((p, i) => (
            <>
            <p key={i}>{p}</p>
              <br />
            </>
            ))}
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <a href="#projects" className="hero-btn hero-btn--primary" onClick={scrollToProjects}>
            Explore Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="hero-btn-arrow">
              <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
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
