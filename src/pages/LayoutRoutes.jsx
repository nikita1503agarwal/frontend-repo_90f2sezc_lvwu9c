import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import HowItWorks from './HowItWorks'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default function LayoutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
