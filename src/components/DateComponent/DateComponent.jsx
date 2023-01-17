import React from "react";
import styles from "./DateComponent.module.css";

function DateComponent({ title }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={styles.date}>
      {title}
      {new Date().toLocaleDateString("en-US", options)}
    </div>
  );
}

export default DateComponent;
