import './App.css'
import ContactSection from './sections/ContactSection'
import FacilitiesSection from './sections/FacilitiesSection'
import GallerySection from './sections/GallerySection'
import HeroSection from './sections/HeroSection'
import RatesSection from './sections/RatesSection'
import SuitesSection from './sections/SuitesSection'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="page">
      <HeroSection />
      <main>
        <SuitesSection />
        <FacilitiesSection />
        <RatesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
