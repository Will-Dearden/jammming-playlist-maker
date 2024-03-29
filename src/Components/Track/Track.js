import React from "react";
import styles from "./Track.module.css";

function Track (props) {
  
  /* Below function checks if the 'isRemoval' property is true; if it is true it returns a button with the '-' value; if it is false it returns a button with the '+' value: */
  function renderAction() {
    return <button className='Track-action'>{props.isRemoval ? "-" : "+"}</button>
  };

  return (
    <div className={styles.Track}>
      <div className={styles['Track-information']}>
        {/* <h3><!-- track name will go here --></h3> */}
        <h3>{props.track.name}</h3>
        {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {/* <button class="Track-action"><!-- + or - will go here --></button> */}
    </div>
  );
}

export default Track;