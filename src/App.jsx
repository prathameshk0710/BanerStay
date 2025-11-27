import { useState } from 'react'
import {
  FiPhoneCall,
  FiWifi,
  FiThermometer,
  FiTv,
  FiDroplet,
  FiMapPin,
  FiClock,
  FiShield,
} from 'react-icons/fi'
import { LuSofa } from 'react-icons/lu'
import { MdLocalParking } from 'react-icons/md'
import { TbBottle, TbSparkles } from 'react-icons/tb'
import './App.css'

const fallbackImage =
  'https://images.unsplash.com/photo-1505692794400-5e0c4c86fed1?auto=format&fit=crop&w=1200&q=80'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'rates', label: 'Rates' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

const roomConcepts = [
  {
    title: 'Square Bed Studio',
    description:
      'Bright, air-conditioned studio with premium square bed, Android TV, and a cozy work nook for quick check-ins.',
    tags: ['Android TV', 'Spacious layout', 'Mood lighting'],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Round Bed Retreat',
    description:
      'Celebration-ready round bed suite featuring a couple couch, accent lighting, and décor options for birthdays or anniversaries.',
    tags: ['Round bed', 'Couple couch', 'Decor add-ons'],
    image:
      'https://images.unsplash.com/photo-1504376379689-9aaa13e05818?auto=format&fit=crop&w=1200&q=80',
  },
]

const facilities = [
  { icon: <FiTv />, title: 'Android TV', detail: 'Smart OTT-ready entertainment built into every room.' },
  { icon: <FiThermometer />, title: 'AC Rooms', detail: 'Climate-controlled comfort for Pune’s summers.' },
  { icon: <FiWifi />, title: 'Free Wi-Fi', detail: 'High-speed internet for workcations and OTT binges.' },
  {
    icon: <MdLocalParking />,
    title: 'Spacious Parking',
    detail: 'Dedicated parking lane so arrivals stay stress-free.',
  },
  { icon: <LuSofa />, title: 'Couple Couch', detail: 'Plush lounge seating perfect for meals or movie nights.' },
  { icon: <FiDroplet />, title: '24×7 Hot Water', detail: 'Instant geysers ensure constant hot water supply.' },
  { icon: <TbBottle />, title: 'Complimentary Water', detail: 'Packaged drinking water placed before every check-in.' },
  { icon: <FiShield />, title: '24 hrs Housekeeping', detail: 'Round-the-clock housekeeping & concierge support.' },
  { icon: <TbSparkles />, title: 'Event Décor', detail: 'Birthday / anniversary decorations on prior request.' },
]

const hourlyRates = [
  { duration: '2 Hours', price: '₹600' },
  { duration: '3 Hours', price: '₹800' },
  { duration: '4 Hours', price: '₹900' },
  { duration: '5 Hours', price: '₹1,100' },
  { duration: '6 Hours', price: '₹1,200' },
  { duration: '7 Hours', price: '₹1,400' },
  { duration: '8 Hours', price: '₹1,600' },
]

const stayPackages = [
  { title: 'Night stay (8 PM – 10 AM)', price: '₹1,500' },
  { title: '24 hrs booking (11:30 AM – 10 AM)', price: '₹1,700' },
  { title: 'Square bed • 24 hrs', price: '₹1,700' },
  { title: 'Round bed • 24 hrs', price: '₹1,900' },
  { title: 'Night charge • Square bed', price: '₹1,300' },
  { title: 'Night charge • Round bed', price: '₹1,500' },
]

const stayNotes = [
  'Check-in for night stays begins at 8:00 PM with 11:00 AM check-out next day.',
  '24-hour booking window: 11:30 AM entry with 10:00 AM check-out.',
  'Complimentary packaged water bottle included with every booking.',
  'Wifi, Android TV, AC, and hot water are available round the clock.',
  'Decorations for birthdays/anniversaries arranged on request.',
]

const galleryImages = [
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1501927023255-9063be98970d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
]

const serviceChips = [
  'Flexible hourly slots',
  'Baner • Balewadi prime lane',
  'Celebration-ready décor',
  'Dedicated housekeeping',
]

const contact = {
  phone: '+91 9494 69 7171',
  email: 'stay@banerstays.com',
  address: ['Baner Stays, Lane Number 7', 'Laxman Nagar, Balewadi', 'Pune 411045, Maharashtra'],
  mapsLink: 'https://maps.app.goo.gl/Y4Lq37wiecg8y4zy9',
}

function ResilientImage({ src, alt, className }) {
  const [attempt, setAttempt] = useState(0)
  const [useFallback, setUseFallback] = useState(false)

  const resolvedSrc = useFallback
    ? fallbackImage
    : attempt === 0
      ? src
      : `${src}${src.includes('?') ? '&' : '?'}retry=${attempt}`

  const handleError = () => {
    if (attempt < 2) {
      setAttempt((prev) => prev + 1)
    } else if (!useFallback) {
      setUseFallback(true)
    }
  }

  return (
    <img src={resolvedSrc} alt={alt} className={className} loading="lazy" onError={handleError} />
  )
}

function App() {
  return (
    <div className="page">
      <header className="hero-shell" id="about">
        <nav className="nav">
          <a className="brand" href="#about">
            <span className="brand-mark" aria-hidden />
            <div>
              <p className="brand-label">Baner Stays</p>
              <span>Hourly & 24 hr boutique stay</span>
            </div>
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="primary" href="tel:+919494697171">
            <FiPhoneCall />
            Call now
          </a>
        </nav>

        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Baner • Balewadi • Pune</p>
            <h1>Stay, unwind, and celebrate at Baner Stays</h1>
            <p className="lead">
              Brand-new boutique hotel featuring AC rooms, Android TVs, and celebration-friendly
              suites. Choose hourly slots or 24-hour bookings with reliable housekeeping, parking,
              and concierge support—minutes from Balewadi High Street.
            </p>
            <div className="chip-row">
              {serviceChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="primary" href="tel:+919494697171">
                <FiPhoneCall />
                9494 69 7171
              </a>
              <a className="secondary" href={contact.mapsLink} target="_blank" rel="noreferrer">
                <FiMapPin />
                Get directions
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <ResilientImage
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=80"
              alt="Baner Stays premium room"
              className="hero-img"
            />
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
              Whether you need a quick hourly recharge or a romantic night, Baner Stays curates two
              versatile room types engineered for comfort and privacy.
            </p>
          </div>
          <div className="suite-grid">
            {roomConcepts.map((concept) => (
              <article className="suite-card" key={concept.title}>
                <ResilientImage
                  key={concept.image}
                  src={concept.image}
                  alt={concept.title}
                  className="suite-img"
                />
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
            {facilities.map((facility) => (
              <article key={facility.title}>
                <span className="facility-icon">{facility.icon}</span>
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
            <p>Pick a window that matches your itinerary—no hidden extras.</p>
          </div>
          <div className="rate-layout">
            <div className="rate-card">
              <h3>Hourly bookings</h3>
              <ul>
                {hourlyRates.map((rate) => (
                  <li key={rate.duration}>
                    <span>{rate.duration}</span>
                    <strong>{rate.price}</strong>
                  </li>
                ))}
              </ul>
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
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <ResilientImage
                key={image}
                src={image}
                alt="Baner Stays interior"
                className="gallery-img"
              />
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Book your slot at Baner Stays</h2>
            <div className="contact-details">
              <p>
                Phone:{' '}
                <a href="tel:+919494697171" className="contact-link">
                  {contact.phone}
                </a>
              </p>
              <p>
                Email:{' '}
                <a href={`mailto:${contact.email}`} className="contact-link">
                  {contact.email}
                </a>
              </p>
            </div>
            <div className="address">
              {contact.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="contact-actions">
              <a className="primary" href="tel:+919494697171">
                <FiPhoneCall /> Call to book
              </a>
              <a className="secondary" href={contact.mapsLink} target="_blank" rel="noreferrer">
                <FiMapPin /> Navigate
              </a>
            </div>
          </div>
          <div className="map-wrapper">
            <iframe
              title="Baner Stays location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Baner%20Stays%20Lane%20number%207%20Laxman%20Nagar%20Balewadi%20Pune%20411045&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Baner Stays. Boutique hourly hotel in Baner, Pune.</p>
        <div className="footer-links">
          <a href="tel:+919494697171">Call</a>
          <a href="https://wa.me/919494697171" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={contact.mapsLink} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
