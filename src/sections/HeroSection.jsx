import { FiClock, FiMapPin, FiPhoneCall, FiShield } from 'react-icons/fi'
import NavBar from '../components/layout/NavBar'
import ResilientImage from '../components/media/ResilientImage'
import { contactInfo, heroMedia, serviceChips, socialLinks } from '../constants/hotelData'

function HeroSection() {
  return (
    <header className="hero-shell" id="about">
      <NavBar />
      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Baner • Balewadi • Pune</p>
          <h1>Stay, unwind, and celebrate at Baner Stays</h1>
          <p className="lead">
            Boutique hotel with AC rooms, Android TVs, spacious parking, and concierge-led décor services. Choose
            hourly slots or 24-hour stays minutes away from Balewadi High Street.
          </p>
          <div className="chip-row">
            {serviceChips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary" href={socialLinks.call}>
              <FiPhoneCall />
              9494 69 7171
            </a>
            <a className="secondary" href={contactInfo.mapsLink} target="_blank" rel="noreferrer">
              <FiMapPin />
              Get directions
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <ResilientImage src={heroMedia.heroImage} alt="Baner Stays premium room" className="hero-img" />
          <div className="hero-floating">
            <div>
              <FiClock />
              <p>24 hrs service desk</p>
              <span>Night check-in • 8:00 PM</span>
            </div>
            <div>
              <FiShield />
              <p>Housekeeping on-call</p>
              <span>Hot water • Wifi • Decor</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection

