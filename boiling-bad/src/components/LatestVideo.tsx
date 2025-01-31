import styles from "./LatestVideo.module.css"

function LatestVideo() {
  return (
    <section className={styles.latestVideo}>
      <h2>Latest Episode</h2>
      <div className={styles.videoWrapper}>
        {/* Replace with your actual video embed code */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Latest Boiling Bad Episode"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default LatestVideo

