import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import PlacesSection from './components/PlacesSection'
import TravelSection from './components/TravelSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="cursor-none-desktop">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SearchSection />
        <PlacesSection />
        <TravelSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
