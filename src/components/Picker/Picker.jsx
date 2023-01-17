import React from "react";
import styles from "./Picker.module.css";

function Picker({ options, handleOnChange, title }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{title}</label>
      <select
        className={styles.select}
        defaultValue={""}
        onChange={(e) => handleOnChange(e.target.value)}
      >
        {options.map((el, i) => {
          return (
            <option key={i} value={el.value}>
              {el.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default React.memo(Picker);
