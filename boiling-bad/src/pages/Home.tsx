import LatestVideo from "../components/LatestVideo"
import LatestRecipe from "../components/LatestRecipe"
import AboutUs from "../components/AboutUs"
import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.home}>
      <LatestVideo />
      <LatestRecipe />
      <AboutUs />
    </div>
  )
}

export default Home

