import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Charter from './pages/Charter'
import IPS from './pages/IPS'
import TrainingPathway from './pages/TrainingPathway'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/charter" element={<Charter />} />
            <Route path="/ips" element={<IPS />} />
            <Route path="/training" element={<TrainingPathway />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


