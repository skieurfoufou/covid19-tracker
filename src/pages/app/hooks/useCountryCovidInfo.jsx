import { useCallback, useEffect, useMemo, useState } from "react";
import { getCountryCovidInfo } from "../../../api/covid.api";

const useCountryCovidInfo = (countryName, countryCode) => {
  const [data, setData] = useState();
  const [error, setError] = useState({ msg: "", code: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const isError = useMemo(() => error.msg !== "", [error]);

  const fetchData = useCallback(async (countryName, countryCode) => {
    setIsLoading(true);
    try {
      const res = await getCountryCovidInfo(countryName, countryCode);
      setData(res);
    } catch (err) {
      console.error(err);
      setError({ msg: "Failed to fetch data", code: err.code });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!countryCode) return;
    fetchData(countryName, countryCode);
  }, []);

  return {
    isError,
    error,
    isLoading,
    data,
    fetchData,
  };
};

export default useCountryCovidInfo;
