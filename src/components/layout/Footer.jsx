import { contactInfo, socialLinks } from '../../constants/hotelData'

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Baner Stays. Boutique hourly hotel in Baner, Pune.</p>
      <div className="footer-links">
        <a href={socialLinks.call}>Call</a>
        <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href={contactInfo.mapsLink} target="_blank" rel="noreferrer">
          Google Maps
        </a>
      </div>
    </footer>
  )
}

export default Footer

