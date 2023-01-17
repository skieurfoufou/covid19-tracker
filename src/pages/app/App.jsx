import React, { useCallback, useEffect, useState } from "react";
import logo from "../../logo.svg";
import { Cards, Chart } from "../../components";
import "./App.css";
import useWorldwideCovidInfo from "./hooks/useWorldwideCovidInfo";
import useCountryCovidInfo from "./hooks/useCountryCovidInfo";
import useAllContinentCovidInfo from "./hooks/useAllContinentCovidInfo";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Polars from "../../components/Polars/Polars";

function App() {
  const { isError, error, isLoading, data, fetchData } =
    useWorldwideCovidInfo();
  const [country, setCountry] = useState("");
  const [isoCode, setIsoCode] = useState("");
  // const [AllContinentCovidInfo, setAllContinentCovidInfo] = useState([]);
  const {
    isError: isErrorCountry,
    error: errorCountry,
    isLoading: isLoadingCountry,
    data: dataCountry,
    fetchData: fetchDataCountry,
  } = useCountryCovidInfo();

  const {
    isError: isErrorAllContinent,
    error: errorAllContinent,
    isLoading: isLoadingAllContinent,
    data: dataAllContinent,
    fetchData: fetchDataAllContinent,
  } = useAllContinentCovidInfo();

  useEffect(() => {
    if (!country || !isoCode) return;
    fetchDataCountry(country, isoCode);
  }, [country, isoCode]);

  useEffect(() => {
    fetchDataAllContinent();
  }, []);

  // useEffect(() => {
  //   if (!dataAllContinent) return;
  //   console.table(dataAllContinent);
  // }, [dataAllContinent]);

  const handleCountryChange = useCallback((countryParam) => {
    const arrRes = countryParam.split("-");
    setIsoCode(arrRes[0]);
    setCountry(arrRes[1]);
  }, []);

  if (isError) {
    return <>Error: {error?.msg}</>;
  } else if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Covid-19 Tracker
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Cards
          dataCovid={data}
          isError={isError}
          errorMes={error.msg}
          isLoading={isLoading}
        />
        <CountryPicker handleCountryChange={handleCountryChange} />
        {country && dataCountry ? (
          <Chart data={dataCountry} country={country} />
        ) : null}

        {dataAllContinent ? <Polars data={dataAllContinent} /> : null}
      </div>
    </div>
  );
}

export default App;
