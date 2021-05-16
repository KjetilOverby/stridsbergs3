import React from "react";
import styles from "../../../styles/KontaktStartPage.module.css";
import Link from "next/link";

function Map() {
  return (
    <div className={styles.mapSectionContainer}>
      <div className={styles.textContainer}>
        <h1>Beliggenehet</h1>
        <h3>
          Vi befinner oss i Stange kommune, Hedmark fylke. Du finner oss ca 1
          mil sør for Hamar, rett ved siden av E6
        </h3>
      </div>
      <Link href="https://www.google.no/maps/place/Kvarnstrands+og+Stridsbergs+AS/@60.7198385,11.2241624,17z/data=!4m5!3m4!1s0x4641e4d7abbe2ac1:0x9943eee0bd0f740d!8m2!3d60.7200585!4d11.2248091">
        <img
          className={styles.mapImg}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fKPkHFkpK5zCQGrA4AqwAcwLyPFiypMiPRt-bMblVyBybzx8NcAgo_aVIKg8gi1PvcyX8Cet9rjuFebr_ZOEp6XLvClLQ6q5sh5v7iY7BSKNbR9tjjW32oGV755kGDmNnMm6w0I9RluA55JZykpEYk=w1346-h668-no?authuser=0"
          alt="Kart"
        />
      </Link>
    </div>
  );
}

export default Map;
