import React from "react";
import styles from "./Card.module.css";
import CountUp from "react-countup";

function Card({
  dataTitle1,
  dataTitle2,
  dataTitle3,
  dataTitle4,
  title,
  title1,
  title2,
  title3,
  title4,
  fontColor1,
  fontColor2,
  fontColor3,
  borderColor,
}) {
  return (
    <div className={`${styles[borderColor]} ${styles.card}`}>
      <h3> {title}</h3>
      <h4>{title1}</h4>
      <CountUp
        start={dataTitle1 / 2}
        end={dataTitle1}
        duration={1.5}
        separator=","
        className={`${styles[fontColor1]} ${styles.sizeFont}`}
      />
      <h4>{title2}</h4>
      <div className={`${styles[fontColor1]} ${styles.sizeFont2}`}>
        {dataTitle2}
      </div>
      <h4>{title3} </h4>
      <div className={`${styles[fontColor2]} ${styles.sizeFont2}`}>
        {dataTitle3}
      </div>
      <h4>{title4}</h4>
      <div className={`${styles[fontColor3]} ${styles.sizeFont2}`}>
        {dataTitle4}
      </div>
    </div>
  );
}

export default Card;
