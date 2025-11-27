import { useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks, socialLinks } from '../../constants/hotelData'

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="nav">
      <a className="brand" href="#about" onClick={handleLinkClick}>
        <span className="brand-mark" aria-hidden>
          BS
        </span>
        <p className="brand-label">Baner Stays</p>
      </a>
      <button
        type="button"
        className="burger-toggle"
        aria-label="Toggle menu"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? <HiX /> : <HiMenu />}
      </button>
      <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </div>
      <div className={`nav-cta ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a className="primary" href={socialLinks.call} onClick={handleLinkClick}>
          <FiPhoneCall />
          Call now
        </a>
        <a
          className="icon-pill"
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Baner Stays"
          onClick={handleLinkClick}
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  )
}

export default NavBar

