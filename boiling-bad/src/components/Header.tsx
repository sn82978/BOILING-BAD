import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <h1>Boiling Bad</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

