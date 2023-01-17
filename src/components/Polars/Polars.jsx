import React from "react";
import styles from "./Polars.module.css";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import DateComponent from "../DateComponent/DateComponent";
import Polar from "../Polar/Polar";
import TablePop from "../TablePop/TablePop";

function Polars({ data }) {
  const asiaTotalDeath = data[0].TotalDeaths;
  const eurTotalDeath = data[1].TotalDeaths;
  const afrTotalDeath = data[2].TotalDeaths;
  const noAmTotalDeath = data[3].TotalDeaths;
  const soAmTotalDeath = data[4].TotalDeaths;
  const oceTotalDeath = data[5].TotalDeaths;

  const asiaTotalCases = data[0].TotalCases;
  const eurTotalCases = data[1].TotalCases;
  const afrTotalCases = data[2].TotalCases;
  const noAmTotalCases = data[3].TotalCases;
  const soAmTotalCases = data[4].TotalCases;
  const oceTotalCases = data[5].TotalCases;

  const asiaTotalPop = data[0].Population;
  const eurTotalPop = data[1].Population;
  const afrTotalPop = data[2].Population;
  const noAmTotalPop = data[3].Population;
  const soAmTotalPop = data[4].Population;
  const oceTotalPop = data[5].Population;

  const dataTable = [];
  dataTable.push(
    asiaTotalPop,
    eurTotalPop,
    afrTotalPop,
    noAmTotalPop,
    soAmTotalPop,
    oceTotalPop
  );

  // const column = [
  //   { heading: "Continent", value: "continent" },
  //   { heading: "Population", value: "population" },
  // ];
  return (
    <>
      <DateComponent title={"REAL CONTINENTS DATA FOR :"} />
      <div className={styles.container}>
        <TablePop data={dataTable} />
        <Polar
          title={"Total Deaths People per Continent"}
          data1={asiaTotalDeath}
          data2={eurTotalDeath}
          data3={afrTotalDeath}
          data4={noAmTotalDeath}
          data5={soAmTotalDeath}
          data6={oceTotalDeath}
        />
        <Polar
          title={"Total Cases People per Continent"}
          data1={asiaTotalCases}
          data2={eurTotalCases}
          data3={afrTotalCases}
          data4={noAmTotalCases}
          data5={soAmTotalCases}
          data6={oceTotalCases}
        />
      </div>
    </>
  );
}

export default Polars;
