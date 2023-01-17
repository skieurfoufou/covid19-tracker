import React from "react";
import styles from "./Polar.module.css";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Polar({ title, data1, data2, data3, data4, data5, data6 }) {
  const polarChart = title ? (
    <PolarArea
      data={{
        labels: [
          "asia",
          "europe",
          "africa",
          "northAmerica",
          "southAmerica",
          "oceania",
        ],
        datasets: [
          {
            label: [title],
            backgroundColor: [
              "rgb(128, 0, 128, 0.5)",
              "rgb(255, 0, 0, 0.5)",
              "rgb(0, 0, 255, 0.5)",
              "rgb(0, 255, 0, 0.5)",
              "rgb(0, 128, 0, 0.5)",
              "rgb(0, 128, 128, 0.5)",
            ],
            data: [data1, data2, data3, data4, data5, data6],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: "Deaths people from continent" },
      }}
    />
  ) : null;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.polar}>{polarChart}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </>
  );
}

export default Polar;
