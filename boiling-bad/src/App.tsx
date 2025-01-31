import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import RecipeList from "./pages/RecipeList"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

