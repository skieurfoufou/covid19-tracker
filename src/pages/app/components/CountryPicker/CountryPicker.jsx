import React from "react";
import useCountryISOCode from "../../hooks/useCountryISOCode";
import Picker from "../../../../components/Picker/Picker";

function CountryPicker({ handleCountryChange }) {
  const {
    isError: isErrorISO,
    error: errorISO,
    isLoading: isLoadingISO,
    data,
  } = useCountryISOCode();

  if (isErrorISO) {
    return <>Error: {errorISO.msg}</>;
  } else if (isLoadingISO) {
    return <>Loading...</>;
  }

  return (
    <Picker
      handleOnChange={handleCountryChange}
      title={"Choose a country"}
      options={data.map((el) => ({
        value: el.ThreeLetterSymbol + "-" + el.Country,
        label: el.Country,
      }))}
    />
  );
}

export default React.memo(CountryPicker);
