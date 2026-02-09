import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Assessment from './pages/Assessment'
import TypeSelection from './pages/TypeSelection'
import Archive from './pages/Archive'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-type/:category" element={<TypeSelection />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/result/:type" element={<Result />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
