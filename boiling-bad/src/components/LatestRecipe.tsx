import { Link } from "react-router-dom"
import styles from "./LatestRecipe.module.css"

function LatestRecipe() {
  return (
    <section className={styles.latestRecipe}>
      <h2>Latest Recipe</h2>
      <div className={styles.recipeCard}>
        <h3>BICE CREAM</h3>
        <p>boiled icre cream in ur mouth</p>
        <Link to="/recipes" className={styles.viewAllButton}>
          View All Recipes
        </Link>
      </div>
    </section>
  )
}

export default LatestRecipe

