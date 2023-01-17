import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import DateComponent from "../DateComponent/DateComponent";

function Cards({
  dataCovid: {
    ActiveCases,
    NewCases,
    NewDeaths,
    NewRecovered,
    SeriousCritical,
    TotalCases,
    TotalDeaths,
    TotalRecovered,
  },
}) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={styles.container}>
      <div>
        <DateComponent title={"REAL WORLD DATA FOR :"} />
        <div className={styles.subContainer}>
          <Card
            title={"INFECTED COVID-19"}
            dataTitle1={TotalCases}
            dataTitle2={NewCases}
            dataTitle3={ActiveCases}
            dataTitle4={SeriousCritical}
            title1={"Total Infected"}
            title2={"Number of new active cases"}
            title3={"Number of active cases"}
            title4={"Number of serious infected active cases"}
            fontColor1="fontColorPurple"
            borderColor="cardPurple"
          />
          <Card
            title={"DEATH COVID-19"}
            dataTitle1={TotalDeaths}
            dataTitle2={NewDeaths}
            title1={"Total Deaths"}
            title2={"Number of new deaths "}
            fontColor1="fontColorRed"
            borderColor="cardRed"
          />
          <Card
            title={"RECOVERED COVID-19"}
            dataTitle1={TotalRecovered}
            dataTitle2={NewRecovered}
            title1={"Total Recovered"}
            title2={"Number of new recovered "}
            fontColor1="fontColorBlue"
            borderColor="cardBlue"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
