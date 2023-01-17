import React from "react";
import Card from "../Card/Card";
import styles from "./TablePop.module.css";

function TablePop({ data }) {
  return (
    <div className={styles.container}>
      <Card
        title={"POPULATION"}
        title1={"asia"}
        dataTitle1={data[0]}
        fontColor1="fontColorPurple"
        borderColor="cardPurple"
      />
      <Card
        title={"POPULATION"}
        title1={"europe"}
        dataTitle1={data[1]}
        fontColor1="fontColorRed"
        borderColor="cardRed"
      />
      <Card
        title={"POPULATION"}
        title1={"africa"}
        dataTitle1={data[2]}
        fontColor1="fontColorBlue"
        borderColor="cardBlue"
      />
      <Card
        title={"POPULATION"}
        title1={"north-america"}
        dataTitle1={data[3]}
        fontColor1="fontColorGreen"
        borderColor="cardGreen"
      />
      <Card
        title={"POPULATION"}
        title1={"south-america"}
        dataTitle1={data[4]}
        fontColor1="fontColorOlive"
        borderColor="cardOlive"
      />
      <Card
        title={"POPULATION"}
        title1={"oceania"}
        dataTitle1={data[5]}
        fontColor1="fontColorGreenBlue"
        borderColor="cardGreenBlue"
      />
    </div>
  );
}

export default TablePop;
