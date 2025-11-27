import { FiPhoneCall } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { navLinks, socialLinks } from '../../constants/hotelData'

function NavBar() {
  return (
    <nav className="nav">
      <a className="brand" href="#about">
        <span className="brand-mark" aria-hidden>
          BS
        </span>
        <p className="brand-label">Baner Stays</p>
      </a>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="nav-cta">
        <a className="primary" href={socialLinks.call}>
          <FiPhoneCall />
          Call now
        </a>
        <a
          className="icon-pill"
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Baner Stays"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  )
}

export default NavBar

