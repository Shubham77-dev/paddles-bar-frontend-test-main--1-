import React from 'react';
import styles from "../styles/modules/EventPage.module.scss";
const EventPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.planYourEvent}>
        <h1>PLAN YOUR EVENT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className={styles.button}>REQUEST INFORMATION</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/event-space.png" alt="Event Space" className={styles.image}/>
      </div>
      
      <div className={styles.imageContainer}>
        <img src="/images/food-img.png" alt="Food and Drinks" className={styles.image}/>
      </div>
      <div className={styles.eatDrink}>
        <h1>EAT. DRINK.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className={styles.button}>DOWNLOAD MENU</button>
      </div>

    </div>
  );
};

export default EventPage;