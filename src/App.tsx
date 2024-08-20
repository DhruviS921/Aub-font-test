import './App.css'
import AboutUs from './pages/AboutUs'
import Business from './pages/Business'
import CaseStudy from './pages/CaseStudy'
import Hero from './pages/Hero'
import Solutions from './pages/Solutions'
import Stats from './pages/Stats'

function App() {

  return (
    <div className="flex flex-col gap-1">
      <Hero />
      <AboutUs />
      <Solutions />
      <CaseStudy />
      <Stats />
      <Business />
    </div>
  )
}

export default App
