import React from "react";
import styles from "./index.module.css";
import image from "../assets/college_01.jpg";
const Card = ({ info }) => {
  return (
    <div className={styles.card}>
      {info.promoted && (
        <div className={styles.promoted}>&nbsp;&nbsp;&nbsp;&nbsp;Promoted</div>
      )}
      <div>
        <div className={styles.ratingBlock}>
          <span className={styles.bigText}>{info.rating}</span>
          /5 <br />
          {info.rating_remarks}
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
              <span className={styles.txtGrey}>{info.nearest_place[1]}</span>
            </h3>
            <span className={styles.flex}>
              <p className={styles.txtGreen}>93% : &nbsp;</p>
              <p>{info.famous_nearest_places}</p>
            </span>
          </div>
          <div className={styles.textRight}>
            <p>
              <span className={styles.strike}>₹{info.original_fees}</span>
              <span>
                <span className={styles.arrRight}> </span>
                <span
                  className={styles.discountIcon}
                >{`• ${info.discount}`}</span>
              </span>
            </p>
            <p className={styles.discountedRed}>₹ {info.discounted_fees}</p>
            <p className={styles.feesCycle}>{info.fees_cycle}</p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.offerTxt}>{info.offertext}</div>
          <p className={styles.txtGreen}>{info.amenties.join(" • ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
