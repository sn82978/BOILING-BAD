import styles from "./Pages.module.css";

function Home() {
  return (
    <div>
      <div className={styles.page}>
        <h1>tejasvini & shreya</h1>
        <p>free will takes a new form.</p>
        <img src="./lilcros.jpeg" alt="lil cros" className={styles.responsiveImage} />
      </div>
    </div>
  );
}

export default Home;