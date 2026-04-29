import { useState, useEffect } from 'react'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">NL</a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
