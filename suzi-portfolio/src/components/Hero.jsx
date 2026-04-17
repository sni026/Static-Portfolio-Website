import heroImg from '../assets/hero.png'
import heroMobileImg from '../assets/hero-mobile.png'
import './Hero.css'
import { LOCATION, NAME, SUBTITLE, BIO } from '../constants'
import { splitIntoParagraphs } from '../utils'
import resume from '../assets/Suzi_Ni_Resume.pdf'
import YellowArrowButton from './shared/YellowArrowButton'

const paragraphs = splitIntoParagraphs(BIO)

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = (e) => {
    e.preventDefault()
    const resumeUrl = resume
    setTimeout(() => {
      window.open(resumeUrl, '_blank')
    }, [200]);
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
        <div className="hero-bio">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-actions">
          <YellowArrowButton href="#projects" onClick={scrollToProjects}>
            Explore Projects
          </YellowArrowButton>
          <a href={resume} className="hero-btn hero-btn--ghost" onClick={downloadResume}>
            My Resume
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
