import styles from "./Pages.module.css";
import Footer from "../components/Footer";

function HomeContent() {
  return (
    <div>
      <div className={styles.page}>
        <h1>tejasvini & shreya</h1>
        <p>free will takes a new form.</p>
        <img src="/BOILING-BAD/images/IMG_2837.JPG" alt="lil cros" className={styles.responsiveImage} />
        <p>welcome! we are tejasvini and shreya, two college kids from uc irvine</p>
        <p>this is our website where we present to you our vlogs! our vlogs are split into
          two categories: boiling bad and bottom bun. boiling bad is where we boil things and
          then eat whatever we boiled. bottom bun is when we travel and let you all travel
          with us. take a look at our vlogs, recipes, and if you wanna know more about us, 
          out about us page :)
        </p>
        <p>stay boiling n bubbling</p>
        <p>gell yeah</p>
        <p>- tejasvini & shreya</p>
      </div>
    </div>
  );
}

function Home() {
  return (
  <div>
    <HomeContent></HomeContent>
    <Footer></Footer>
  </div>)
}

export default Home;