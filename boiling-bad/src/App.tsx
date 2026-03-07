import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import BappleBider from "./pages/1"
import BiceCream1 from "./pages/2"
import BiceBea from "./pages/3"
import BiceCream2 from "./pages/4"
import AboutUs from "./pages/AboutUs"
import BottomBun from "./pages/BottomBun"
import F24 from "./pages/60"
import F25 from "./pages/61"
import styles from "./App.module.css"
import BillieBean from "./pages/BB"
import LaVie from "./pages/70"
import BinkBanther from "./pages/71"
import DonnyBoy from "./pages/72.tsx"

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
              <Link to="/bottom-bun">bottom bun</Link>
            </li>
            <li>
              <Link to="/billie-bean">billie bean</Link>
            </li>
            <li>
              <Link to="/about-us">about us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boiling-bad" element={<Recipes />} />
          <Route path="/bottom-bun" element={<BottomBun />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/billie-bean" element={<BillieBean />} />
          <Route path="/boiling-bad/1" element={<BappleBider />} />
          <Route path="/boiling-bad/2" element={<BiceCream1 />} />
          <Route path="/boiling-bad/3" element={<BiceBea />} />
          <Route path="/boiling-bad/4" element={<BiceCream2 />} />
          <Route path="/bottom-bun/60" element={<F24 />} />
          <Route path="/billie-bean/70" element={<LaVie />} />
          <Route path="/billie-bean/71" element={<BinkBanther />} />
          <Route path="/billie-bean/72" element={<DonnyBoy />} />
          <Route path="/bottom-bun/61" element={<F25 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

