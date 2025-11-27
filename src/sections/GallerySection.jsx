import { useState } from 'react'
import ResilientImage from '../components/media/ResilientImage'
import { gallerySections } from '../constants/hotelData'

function GallerySection() {
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const visibleCount = showAllPhotos ? Infinity : 4

  return (
    <section className="gallery" id="gallery">
      <div className="section-head">
        <p className="eyebrow">Space preview</p>
        <h2>Neutral palettes, warm lighting, and spotless upkeep</h2>
      </div>
      {gallerySections.map((section) => (
        <div className="gallery-section" key={section.id}>
          <div className="gallery-header">
            <h3>{section.label}</h3>
            {!showAllPhotos && section.images.length > visibleCount && <span>{section.images.length} photos</span>}
          </div>
          <div className="gallery-grid">
            {section.images.slice(0, visibleCount).map((image) => (
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
  )
}

export default GallerySection

