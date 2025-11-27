import { useMemo, useState } from 'react'
import {
  FiClock,
  FiDroplet,
  FiInstagram,
  FiMapPin,
  FiPhoneCall,
  FiShield,
  FiThermometer,
  FiTv,
  FiWifi,
} from 'react-icons/fi'
import { LuSofa } from 'react-icons/lu'
import { MdLocalParking } from 'react-icons/md'
import { TbBottle, TbSparkles } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa6'
import ResilientImage from './components/ResilientImage'
import {
  contactInfo,
  facilityDetails,
  gallerySections,
  heroMedia,
  hourlyRates,
  navLinks,
  roomConcepts,
  serviceChips,
  socialLinks,
  stayNotes,
  stayPackages,
} from './constants/hotelData'
import './App.css'

const facilityIcons = {
  tv: <FiTv />,
  ac: <FiThermometer />,
  wifi: <FiWifi />,
  parking: <MdLocalParking />,
  sofa: <LuSofa />,
  water: <FiDroplet />,
  bottle: <TbBottle />,
  housekeeping: <FiShield />,
  decor: <TbSparkles />,
}

function App() {
  const hourValues = hourlyRates.map((slot) => slot.hours)
  const [selectedHours, setSelectedHours] = useState(hourValues[0])
  const [selectedBed, setSelectedBed] = useState(roomConcepts[0]?.id || 'square')
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  const selectedRate = useMemo(
    () => hourlyRates.find((slot) => slot.hours === Number(selectedHours)),
    [selectedHours],
  )

  const sliderPercentage =
    ((Number(selectedHours) - hourValues[0]) / (hourValues[hourValues.length - 1] - hourValues[0])) *
    100

  const bedUpsell = selectedBed === 'round' ? 200 : 0
  const plannerPrice =
    selectedRate?.price != null ? `₹${(selectedRate.price + bedUpsell).toLocaleString('en-IN')}` : '—'

  const visibleGalleryCount = showAllPhotos ? Infinity : 4

  return (
    <div className="page">
      <header className="hero-shell" id="about">
        <nav className="nav">
          <a className="brand" href="#about">
            <span className="brand-mark" aria-hidden>BS</span>
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
            <a className="icon-pill" href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </nav>

        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Baner • Balewadi • Pune</p>
            <h1>Stay, unwind, and celebrate at Baner Stays</h1>
            <p className="lead">
              Boutique hotel with AC rooms, Android TVs, spacious parking, and concierge-led décor services.
              Choose hourly slots or 24-hour stays minutes away from Balewadi High Street.
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

      <main>
        <section className="stay-types" id="suites">
          <div className="section-head">
            <p className="eyebrow">Suites & moods</p>
            <h2>Choose the layout that fits your plan</h2>
            <p>
              Whether it’s a quick recharge or an evening celebration, Baner Stays offers curated setups with
              reliable services and décor-ready spaces.
            </p>
          </div>
          <div className="suite-grid">
            {roomConcepts.map((concept) => (
              <article className="suite-card" key={concept.id}>
                <ResilientImage src={concept.image} alt={concept.title} className="suite-img" />
                <div className="suite-body">
                  <h3>{concept.title}</h3>
                  <p>{concept.description}</p>
                  <ul>
                    {concept.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="facilities" id="facilities">
          <div className="section-head">
            <p className="eyebrow">Our Facilities</p>
            <h2>Everything you asked for, already included</h2>
            <p>From Android TVs to packaged drinking water, every stay is celebration-ready.</p>
          </div>
          <div className="facility-grid">
            {facilityDetails.map((facility) => (
              <article key={facility.id}>
                <span className="facility-icon">{facilityIcons[facility.id]}</span>
                <h3>{facility.title}</h3>
                <p>{facility.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rates" id="rates">
          <div className="section-head">
            <p className="eyebrow">Transparent pricing</p>
            <h2>Hourly slots & curated packages</h2>
            <p>Use the planner to preview an hourly slot or browse preset stays.</p>
          </div>
          <div className="rate-layout">
            <div className="rate-planner">
              <div className="planner-header">
                <p>Plan hourly visit</p>
                <span>{selectedHours} hrs</span>
              </div>
              <input
                type="range"
                min={hourValues[0]}
                max={hourValues[hourValues.length - 1]}
                step="1"
                value={selectedHours}
                onChange={(event) => setSelectedHours(Number(event.target.value))}
                className="planner-slider"
                style={{ backgroundSize: `${sliderPercentage}% 100%` }}
              />
              <div className="slider-marks">
                {hourlyRates.map((slot) => (
                  <span key={slot.hours}>{slot.hours}h</span>
                ))}
              </div>
              <label className="planner-select">
                Bed preference
                <select value={selectedBed} onChange={(event) => setSelectedBed(event.target.value)}>
                  {roomConcepts.map((concept) => (
                    <option key={concept.id} value={concept.id}>
                      {concept.title}
                    </option>
                  ))}
                </select>
              </label>
              <div className="planner-price">
                <p>Slot investment</p>
                <strong>{plannerPrice}</strong>
                {selectedBed === 'round' && <small>Round bed includes décor-ready setup.</small>}
              </div>
            </div>
            <div className="rate-card">
              <h3>Packages & bed choices</h3>
              <ul>
                {stayPackages.map((pack) => (
                  <li key={pack.title}>
                    <span>{pack.title}</span>
                    <strong>{pack.price}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="info-strip">
            {stayNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="section-head">
            <p className="eyebrow">Space preview</p>
            <h2>Neutral palettes, warm lighting, and spotless upkeep</h2>
          </div>
          {gallerySections.map((section) => (
            <div className="gallery-section" key={section.id}>
              <div className="gallery-header">
                <h3>{section.label}</h3>
                {!showAllPhotos && section.images.length > visibleGalleryCount && (
                  <span>{section.images.length} photos</span>
                )}
              </div>
              <div className="gallery-grid">
                {section.images.slice(0, visibleGalleryCount).map((image) => (
                  <ResilientImage key={`${section.id}-${image}`} src={image} alt={section.label} className="gallery-img" />
                ))}
              </div>
            </div>
          ))}
          <div className="gallery-actions">
            <button type="button" className="secondary" onClick={() => setShowAllPhotos((prev) => !prev)}>
              {showAllPhotos ? 'Show less photos' : 'View more photos'}
            </button>
          </div>
        </section>

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
              <a
                className="icon-pill"
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Baner Stays"
              >
                <FaWhatsapp />
              </a>
              <a
                className="icon-pill"
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Baner Stays Instagram"
              >
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
      </main>

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
    </div>
  )
}

export default App
