import { useState } from 'react'
import ResilientImage from '../components/media/ResilientImage'
import { gallerySections } from '../constants/hotelData'

function GallerySection() {
  const [expandedSection, setExpandedSection] = useState(null)
  const [activeImage, setActiveImage] = useState(null)

  const handleToggleSection = (id) => {
    setExpandedSection((prev) => (prev === id ? null : id))
  }

  const handleOpenImage = (sectionId, src, label, index) => {
    setActiveImage({ sectionId, src, label, index })
  }

  const handleCloseLightbox = () => {
    setActiveImage(null)
  }

  const handleStep = (direction) => {
    if (!activeImage) return
    const section = gallerySections.find((s) => s.id === activeImage.sectionId)
    if (!section) return

    const total = section.images.length
    const nextIndex = (activeImage.index + direction + total) % total

    setActiveImage({
      sectionId: section.id,
      src: section.images[nextIndex],
      label: section.label,
      index: nextIndex,
    })
  }

  return (
    <section className="gallery" id="gallery">
      <div className="section-head">
        <p className="eyebrow">Space preview</p>
        <h2>Neutral palettes, warm lighting, and spotless upkeep</h2>
      </div>
      {gallerySections.map((section) => {
        const isExpanded = expandedSection === section.id
        const visibleImages = isExpanded ? section.images : section.images.slice(0, 4)

        return (
          <div className={`gallery-section ${isExpanded ? 'expanded' : ''}`} key={section.id}>
            <div className="gallery-header">
              <h3>{section.label}</h3>
              <div className="gallery-header-actions">
                <span className="gallery-count">{section.images.length} photos</span>
                {section.images.length > 4 && (
                  <button
                    type="button"
                    className="secondary gallery-toggle"
                    onClick={() => handleToggleSection(section.id)}
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            </div>
            {/* Desktop grid view */}
            <div className="gallery-grid">
              {visibleImages.map((image, index) => (
                <button
                  type="button"
                  className="gallery-img-button"
                  key={`${section.id}-${image}`}
                  onClick={() =>
                    handleOpenImage(section.id, image, section.label, isExpanded ? index : index)
                  }
                >
                  <ResilientImage src={image} alt={section.label} className="gallery-img" />
                </button>
              ))}
            </div>
            {/* Mobile horizontal scroll view */}
            <div className="gallery-scroll">
              {section.images.map((image, index) => (
                <button
                  type="button"
                  className="gallery-img-button"
                  key={`${section.id}-${image}-mobile`}
                  onClick={() => handleOpenImage(section.id, image, section.label, index)}
                >
                  <ResilientImage src={image} alt={section.label} className="gallery-img" />
                </button>
              ))}
            </div>
          </div>
        )
      })}

      {activeImage && (
        <div className="lightbox-backdrop" onClick={handleCloseLightbox} role="dialog" aria-modal="true">
          <div className="lightbox" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={handleCloseLightbox}>
              ×
            </button>
            <div className="lightbox-body">
              <button type="button" className="lightbox-nav prev" onClick={() => handleStep(-1)}>
                ‹
              </button>
              <ResilientImage src={activeImage.src} alt={activeImage.label} className="lightbox-img" />
              <button type="button" className="lightbox-nav next" onClick={() => handleStep(1)}>
                ›
              </button>
            </div>
            <p className="lightbox-caption">{activeImage.label}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection

