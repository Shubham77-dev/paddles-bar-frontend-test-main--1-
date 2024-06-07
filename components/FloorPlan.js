import React from 'react';
import styles from '../styles/modules/FloorPlan.module.scss';

const FloorPlan = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FLOOR PLAN</h1>
      <div className={styles.navigation}>
        <span>FLOOR 1 |</span>
        <span className={styles.active}> FLOOR 2 </span>
        <span> | MASTER BEDROOM </span>
        <span> | MASTER BATHROOM </span>
        <span> | INNER COURTYARD </span>
        <span> | BEDROOM 2 </span>
        <span> | BATHROOM 2 </span>
        <span> | FLOOR 3</span>
      </div>
      <div className={styles.floorImageContainer}>
        <img src="/images/floorImg.png" alt="Floor Plan" className={styles.floorImage} />
      </div>
      <button className={styles.downloadButton}>DOWNLOAD FLOOR PLANS</button>
    </div>
  );
};

export default FloorPlan;
