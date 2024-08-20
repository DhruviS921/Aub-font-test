import './App.css'
import AboutUs from './pages/AboutUs'
import Hero from './pages/Hero'
import Solutions from './pages/Solutions'

function App() {

  return (
    <div className="flex flex-col gap-1">
      <Hero />
      <AboutUs />
      <Solutions />
    </div>
  )
}

export default App
