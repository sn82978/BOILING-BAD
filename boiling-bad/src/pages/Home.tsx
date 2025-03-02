import styles from "./Pages.module.css";

function Home() {
  return (
    <div>
      <div className={styles.page}>
        <h1>tejasvini & shreya</h1>
        <p>free will takes a new form.</p>
        <img src="/BOILING-BAD/images/IMG_2837.JPG" alt="lil cros" className={styles.responsiveImage} />
        <p>tejasvini & shreya</p>
      </div>
    </div>
  );
}

export default Home;