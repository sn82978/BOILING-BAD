import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import BappleBider from "./pages/1"
import BiceCream1 from "./pages/2"
import BiceBea from "./pages/3"
import BiceCream2 from "./pages/4"
import AboutUs from "./pages/AboutUs"
import styles from "./App.module.css"

function App() {
  return (
    <Router basename="/BOILING-BAD">
      <div className={styles.app}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/boiling-bad">boiling bad</Link>
            </li>
            <li>
              <Link to="/music">about us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boiling-bad" element={<Recipes />} />
          <Route path="/music" element={<AboutUs />} />
          <Route path="/boiling-bad/1" element={<BappleBider />} />
          <Route path="/boiling-bad/2" element={<BiceCream1 />} />
          <Route path="/boiling-bad/3" element={<BiceBea />} />
          <Route path="/boiling-bad/4" element={<BiceCream2 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

