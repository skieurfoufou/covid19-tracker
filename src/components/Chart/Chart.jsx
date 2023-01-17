import React from "react";
import styles from "./Chart.module.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Card from "../Card/Card";

function Chart({ data, country }) {
  const {
    TotalCases,
    TotalDeaths,
    TotalRecovered,
    TotalTests,
    Population,
    Deaths_1M_pop,
    TotCases_1M_Pop,
    Tests_1M_Pop,
  } = data;
  console.log({ data, country });
  const barChart = TotalCases ? (
    <Bar
      data={{
        labels: ["infected", "deaths", "recovered"],
        datasets: [
          {
            label: "Number of People",
            backgroundColor: [
              "rgb(128, 0, 128, 0.5)",
              "rgb(255, 0, 0, 0.5)",
              "rgb(0, 0, 255, 0.5)",
            ],
            borderColor: ["purple", "red", "blue"],
            borderWidth: 2,
            data: [TotalCases, TotalDeaths, TotalRecovered],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current data in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <div className={styles.pop}>Total Population: {Population}</div>
      <div className={styles.subContainer}>
        <div className={styles.chart}>{barChart}</div>
        <div>
          <Card
            title={`DATA COVID-19 OF ${country}`}
            dataTitle1={TotalDeaths}
            dataTitle2={Deaths_1M_pop}
            dataTitle3={TotCases_1M_Pop}
            dataTitle4={Tests_1M_Pop}
            title1={"Total of death people"}
            title2={"Number of deaths / 1M of population "}
            title3={"Number of infected / 1M of population "}
            title4={"Number of recovered / 1M of population"}
            fontColor1="fontColorRed"
            fontColor2="fontColorPurple"
            fontColor3="fontColorBlue"
          />
        </div>
      </div>
    </div>
  );
}

export default Chart;
