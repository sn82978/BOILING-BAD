import styles from "./Pages.module.css"
import Footer from "../components/Footer";

function AboutUsContent() {
  return (
    <div className={styles.page}>
      <h1>join us</h1>
      <p>free will to boil.</p>
      <p>we are two uci students and we met because our moms met on a whatsapp group and said we should be roommates</p>
      <img src="IMG_9786.JPG" alt="lil cros" className={styles.responsiveImage} />
      <p>fund us! we are @Shreya-Nakum and @tejasvini_ramesh 👅</p>
    </div>
  )
}

function AboutUs() {
  return (
  <div>
    <AboutUsContent></AboutUsContent>
    <Footer></Footer>
  </div>)
}

export default AboutUs

