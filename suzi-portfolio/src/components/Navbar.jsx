import { useState, useEffect } from 'react'
import code from '../assets/code.png'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
]

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeOnResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner container">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar-logo"
          aria-label="Suzi Ni — scroll to top"
          onClick={(e) => handleLink(e, '#hero')}
        >
          <img src={code} className="navbar-monogram" aria-hidden="true" />
          <span className="navbar-wordmark">Suzi Ni</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar-nav" aria-label="Primary">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="navbar-link"
              onClick={(e) => handleLink(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="navbar-cta"
          onClick={(e) => handleLink(e, '#contact')}
        >
          Contact Me
        </a>

        {/* Hamburger */}
        <button
          className={`navbar-burger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar-drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="navbar-drawer-link"
            tabIndex={menuOpen ? 0 : -1}
            onClick={(e) => handleLink(e, href)}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="navbar-drawer-cta"
          tabIndex={menuOpen ? 0 : -1}
          onClick={(e) => handleLink(e, '#contact')}
        >
          Contact Me
        </a>
      </div>
    </header>
  )
}
