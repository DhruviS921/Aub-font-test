import './App.css'
import AboutUs from './pages/AboutUs'
import Hero from './pages/Hero'

function App() {

  return (
    <div className="flex flex-col gap-1">
      <Hero />
      <AboutUs />
    </div>
  )
}

export default App
