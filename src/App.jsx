import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Error404 } from "./components/Error404"
import { MangaDetails } from "./pages/MangaDetails"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
