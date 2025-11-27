import './App.css'

const suites = [
  {
    name: 'Skyline Suite',
    description: 'Panoramic mountain views, curated minibar, and butler service for an unforgettable stay.',
    highlights: ['1,200 sq ft', 'Private terrace', 'In-room spa rituals'],
    image:
      'https://images.unsplash.com/photo-1501117716987-c8e1ecb2108e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Garden Residence',
    description: 'Sunlit residence overlooking a private courtyard with outdoor soaking tub and day bed.',
    highlights: ['Private garden', 'Fireplace lounge', 'Outdoor shower'],
    image:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Ocean Pavilion',
    description: 'Floor-to-ceiling glass with ocean horizon views, curated art, and bespoke amenities.',
    highlights: ['Infinity plunge pool', 'Curated art', 'Personal host'],
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  },
]

const experiences = [
  {
    title: 'Private Dining',
    text: 'Chef-led tasting menus in the Solstice Conservatory featuring locally foraged ingredients.',
    icon: '🍽️',
  },
  {
    title: 'Signature Spa',
    text: 'Tailored wellness journeys with aromatherapy pools, crystal steam rooms, and sound baths.',
    icon: '💆‍♀️',
  },
  {
    title: 'Curated Excursions',
    text: 'Sunrise yacht charters, vineyard picnics, and helicopter tours arranged by our concierge.',
    icon: '🗺️',
  },
]

const amenities = [
  { label: 'Complimentary airport chauffeur', detail: 'Luxury transfers within 30 miles' },
  { label: '24/7 concierge & butler', detail: 'From itinerary design to last-minute requests' },
  { label: 'Private beach club access', detail: 'Reserved cabanas and sunset service rituals' },
  { label: 'Smart suite controls', detail: 'App-powered lighting, climate, and entertainment' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501117716987-c8e1ecb2108e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501927023255-9063be98970d?auto=format&fit=crop&w=800&q=80',
]

const reviews = [
  {
    name: 'Sophia Miller',
    stay: 'March 2025',
    comment:
      'Every detail, from the welcome ritual to the candlelit poolside dinner, felt curated just for us.',
  },
  {
    name: 'Daniel Park',
    stay: 'January 2025',
    comment:
      'The Skyline Suite view is unreal, and the concierge planned an entire weekend of hidden local gems.',
  },
  {
    name: 'Priya Nataraj',
    stay: 'December 2024',
    comment:
      'Spa therapies were next level—sound bath, crystal sauna, and personalized aromatherapy oils.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero" id="home">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark" />
            Aurora Vista Hotel
          </div>
          <div className="nav-links">
            <a href="#suites">Suites</a>
            <a href="#experiences">Experiences</a>
            <a href="#amenities">Amenities</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="primary ghost">Book your stay</button>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">New opening • Est. 2025</p>
            <h1>Seaside sanctuary with bespoke hospitality</h1>
            <p className="lead">
              Discover Aurora Vista Hotel—a coastal hideaway of 48 residences, a signature spa,
              and destination dining designed for travelers chasing understated luxury.
            </p>
            <div className="hero-actions">
              <button className="primary">Plan your escape</button>
              <button className="secondary">View suites</button>
            </div>
            <div className="stats-grid">
              <div>
                <p className="stat">48</p>
                <p className="label">Designer suites</p>
              </div>
              <div>
                <p className="stat">3</p>
                <p className="label">Signature restaurants</p>
              </div>
              <div>
                <p className="stat">24/7</p>
                <p className="label">Concierge care</p>
              </div>
            </div>
          </div>
          <div className="hero-gallery">
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80" alt="Infinity pool" />
            <div className="hero-card">
              <p className="hero-card-label">Sunset Ritual</p>
              <p className="hero-card-text">Champagne sabrage & private chef tasting at golden hour.</p>
            </div>
            <div className="hero-floating">
              <p>Tripadvisor</p>
              <strong>5.0 / 5.0</strong>
              <span>Opening season rating</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="suites" id="suites">
          <div className="section-head">
            <p className="eyebrow">Our residences</p>
            <h2>Suites crafted for slow living</h2>
            <p>
              Each suite is layered with artisanal textiles, bespoke furnishings, and smart comforts
              to let the coastline views take center stage.
            </p>
          </div>
          <div className="suite-grid">
            {suites.map((suite) => (
              <article className="suite-card" key={suite.name}>
                <img src={suite.image} alt={suite.name} loading="lazy" />
                <div className="suite-body">
                  <div>
                    <h3>{suite.name}</h3>
                    <p>{suite.description}</p>
                  </div>
                  <ul>
                    {suite.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <button className="text-btn">Request availability →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experiences" id="experiences">
          <div className="section-head light">
            <p className="eyebrow">Immersive experiences</p>
            <h2>Spend your days exactly how you imagined</h2>
            <p>Signature rituals, private dining, and curated adventures await.</p>
          </div>
          <div className="experience-grid">
            {experiences.map((item) => (
              <article key={item.title} className="experience-card">
                <div className="experience-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="amenities" id="amenities">
          <div className="section-head">
            <p className="eyebrow">Services & amenities</p>
            <h2>Every touchpoint considered</h2>
            <p>Our team orchestrates seamless stays with elevated, intuitive service.</p>
          </div>
          <div className="amenities-grid">
            {amenities.map((amenity) => (
              <article key={amenity.label}>
                <h3>{amenity.label}</h3>
                <p>{amenity.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery" aria-label="Hotel gallery">
          {galleryImages.map((src) => (
            <img src={src} alt="Aurora Vista Hotel interior" loading="lazy" key={src} />
          ))}
        </section>

        <section className="reviews">
          <div className="section-head">
            <p className="eyebrow">Guest stories</p>
            <h2>What travelers are saying</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article key={review.name}>
                <p className="quote">“{review.comment}”</p>
                <p className="reviewer">
                  {review.name} • {review.stay}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Connect with us</p>
            <h2>Reserve your stay</h2>
            <p>
              +1 (555) 204-7810
              <br />
              hello@auroravistahotel.com
            </p>
            <p>
              88 Seabreeze Promenade
              <br />
              Solis Bay, California
            </p>
            <button className="primary">Chat with concierge</button>
          </div>
          <div className="map-wrapper">
            <iframe
              title="Aurora Vista location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.8105515780366!2d-117.28130722396013!3d32.82424018095309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0299d87222d3%3A0x992fb86189bb17f5!2sLa%20Jolla%20Cove!5e0!3m2!1sen!2sus!4v1700080059370!5m2!1sen!2sus"
            />
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Aurora Vista Hotel. Crafted for the discerning traveler.</p>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">
            Pinterest
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
