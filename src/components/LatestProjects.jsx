import Marquee from "react-fast-marquee"
import styles from "../styles/latestProjects.module.css"

import banner from "../assets/LatestProjects/main.png"

// import badge from "../assets/LatestProjects/badge.svg"

function LatestProjects() {
  const projects = [banner, banner]

  return (
    <div className={styles.latestProjects}>
      {/* <img src={badge} alt="" className={styles.badge} /> */}
      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover={false}
        className={styles.marqueeContainer}
      >
        {projects.map((project, index) => (
          <img
            key={index}
            src={banner}
            alt="Project banner"
            className={styles.lpImg}
          />
        ))}
      </Marquee>
    </div>
  )
}

export default LatestProjects
