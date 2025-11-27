import { FiInstagram, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { contactInfo, socialLinks } from '../constants/hotelData'

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Book your slot at Baner Stays</h2>
        <div className="contact-details">
          <p>
            Phone:{' '}
            <a href={socialLinks.call} className="contact-link">
              {contactInfo.phone}
            </a>
          </p>
          <p>
            Email:{' '}
            <a href={`mailto:${contactInfo.email}`} className="contact-link">
              {contactInfo.email}
            </a>
          </p>
        </div>
        <div className="address">
          {contactInfo.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="contact-actions">
          <a className="primary" href={socialLinks.call}>
            <FiPhoneCall /> Call to book
          </a>
          <a className="secondary" href={contactInfo.mapsLink} target="_blank" rel="noreferrer">
            <FiMapPin /> Navigate
          </a>
        </div>
        <div className="social-buttons">
          <a className="icon-pill" href={socialLinks.call} aria-label="Call Baner Stays">
            <FiPhoneCall />
          </a>
          <a className="icon-pill" href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Baner Stays">
            <FaWhatsapp />
          </a>
          <a className="icon-pill" href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Baner Stays Instagram">
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="map-wrapper">
        <iframe
          title="Baner Stays location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Baner%20Stays%2C%20Lane%20Number%207%2C%20Laxman%20Nagar%2C%20Balewadi%2C%20Pune%20411045&t=&z=16&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </section>
  )
}

export default ContactSection

