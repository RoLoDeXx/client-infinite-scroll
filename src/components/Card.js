import React from "react";
import styles from "./index.module.css";
import image from "../assets/college_01.jpg";
const Card = ({ info }) => {
  return (
    <div className={styles.card}>
      {info.promoted && <div className={styles.promoted}>Promoted</div>}
      <div>
        <div className={styles.ratingBlock}>
          <span>{info.rating}</span>
          /5
        </div>
        <img src={image} alt="college_background" />
      </div>

      <div
        className={`${styles.flexAlignCenterJustifyBetween} ${styles.imageFooter}`}
      >
        <div>
          {info.tags.map((item) => (
            <span className={styles.chip} key={item}>
              {item}
            </span>
          ))}
        </div>
        <p>#{info.ranking}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.flexAlignCenterJustifyBetween}>
          <div>
            <h2>{info.college_name} Rating</h2>
            {/* <h2>{info.college_name.split(" - ")[0]} Rating</h2> */}
            <h3>
              {`${info.nearest_place[0]} | `}
              <span></span>
              {info.nearest_place[1]}
            </h3>
            <span className={styles.flex}>
              <p>MATCH% : &nbsp;</p>
              <p>{info.famous_nearest_places}</p>
            </span>
          </div>
          <div className={styles.textRight}>
            <p>
              <span className={styles.strike}>₹{info.original_fees}</span>
              <span> {`<${info.discount}`}</span>
            </p>
            <p>₹ {info.discounted_fees}</p>
            <p>{info.fees_cycle}</p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.offerTxt}>{info.offertext}</div>
          <p>{info.amenties.join(" • ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
