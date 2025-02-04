import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Videos from "./pages/Videos"
import AboutUs from "./pages/AboutUs"
import styles from "./App.module.css"

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

