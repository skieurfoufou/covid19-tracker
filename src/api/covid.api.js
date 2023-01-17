import axios from "axios";
import { transformNumberWithComa } from "../utils/utils";

const COVID_API_KEY = "cb16907690msh18f93810452a958p1296fbjsn88b4f9e030c3";
const COVID_API_HOST =
  "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com";
const COVID_API_SERVICE = `https://${COVID_API_HOST}/api`;

export async function getWorldwideCovidInfo() {
  const options = {
    method: "GET",
    url: `${COVID_API_SERVICE}/npm-covid-data/world`,
    headers: {
      "X-RapidAPI-Key": COVID_API_KEY,
      "X-RapidAPI-Host": COVID_API_HOST,
    },
  };
  const response = await axios(options);
  // Validate data here, generate error if not valid
  // Treat error with your own logic
  // Transform data as you need, g.e. mapping
  const modifiedData = {
    NewCases: transformNumberWithComa(response.data[0].NewCases),
    NewDeaths: transformNumberWithComa(response.data[0].NewDeaths),
    NewRecovered: transformNumberWithComa(response.data[0].NewRecovered),
    TotalCases: response.data[0].TotalCases,
    TotalDeaths: response.data[0].TotalDeaths,
    TotalRecovered: response.data[0].TotalRecovered,
    ActiveCases: transformNumberWithComa(response.data[0].ActiveCases),
    SeriousCritical: transformNumberWithComa(response.data[0].Serious_Critical),
  };
  return modifiedData;
}

export async function getCountryCovidInfo(countryName, countryCode) {
  const options = {
    method: "GET",
    url: `${COVID_API_SERVICE}/npm-covid-data/country-report-iso-based/${countryName}/${countryCode}`,
    headers: {
      "X-RapidAPI-Key": COVID_API_KEY,
      "X-RapidAPI-Host": COVID_API_HOST,
    },
  };
  const response = await axios(options);
  // Validate data here, generate error if not valid
  // Treat error with your own logic
  // Transform data as you need, g.e. mapping

  const modifiedData = {
    TotalCases: response.data[0].TotalCases,
    TotalDeaths: response.data[0].TotalDeaths,
    TotalRecovered: response.data[0].TotalRecovered,
    TotalTests: transformNumberWithComa(response.data[0].TotalTests),
    Population: transformNumberWithComa(response.data[0].Population),
    Deaths_1M_pop: transformNumberWithComa(response.data[0].Deaths_1M_pop),
    TotCases_1M_Pop: transformNumberWithComa(response.data[0].TotCases_1M_Pop),
    Tests_1M_Pop: transformNumberWithComa(response.data[0].Tests_1M_Pop),
    SeriousCritical: response.data[0].Serious_Critical,
  };
  return modifiedData;
}

export async function getCountryISOCode() {
  const options = {
    method: "GET",
    url: `${COVID_API_SERVICE}/npm-covid-data/countries-name-ordered`,
    headers: {
      "X-RapidAPI-Key": COVID_API_KEY,
      "X-RapidAPI-Host": COVID_API_HOST,
    },
  };
  const response = await axios(options);
  // Validate data here, generate error if not valid
  // Treat error with your own logic
  // Transform data as you need, g.e. mapping
  const modifiedData = response.data.flat();
  return modifiedData;
}

export async function getContinentCovidInfo(continent) {
  const options = {
    method: "GET",
    url: `${COVID_API_SERVICE}/npm-covid-data/${continent}`,
    headers: {
      "X-RapidAPI-Key": COVID_API_KEY,
      "X-RapidAPI-Host": COVID_API_HOST,
    },
  };
  const response = await axios(options);
  // Validate data here, generate error if not valid
  // Treat error with your own logic
  // Transform data as you need, g.e. mapping

  const modifiedData = {
    Continent: response.data[0].Continent,
    TotalCases: response.data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.TotalCases,
      0
    ),
    TotalDeaths: response.data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.TotalDeaths,
      0
    ),

    TotalRecovered: response.data.reduce(
      (accumulator, currentValue) =>
        accumulator + parseInt(currentValue.TotalRecovered),
      0
    ),
    Population: response.data.reduce(
      (accumulator, currentValue) =>
        accumulator + parseInt(currentValue.Population),
      0
    ),
  };
  return modifiedData;
}

export async function getAllContinentCovidInfo() {
  const asiaData = await getContinentCovidInfo("asia");
  const europeData = await getContinentCovidInfo("europe");
  const africaData = await getContinentCovidInfo("africa");
  const northAmericaData = await getContinentCovidInfo("northamerica");
  const southAmericaData = await getContinentCovidInfo("southamerica");
  const australiaData = await getContinentCovidInfo("australia");
  let allContinentData = [];
  allContinentData.push(
    asiaData,
    europeData,
    africaData,
    northAmericaData,
    southAmericaData,
    australiaData
  );
  return allContinentData;
}
