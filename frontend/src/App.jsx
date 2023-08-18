import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Add from "./pages/Add"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
