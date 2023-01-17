import { useCallback, useEffect, useMemo, useState } from "react";
import { getContinentCovidInfo } from "../../../api/covid.api";

const useContinentCovidInfo = (continent) => {
  const [data, setData] = useState();
  const [error, setError] = useState({ msg: "", code: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const isError = useMemo(() => error.msg !== "", [error]);

  const fetchData = useCallback(async (continent) => {
    setIsLoading(true);
    try {
      const res = await getContinentCovidInfo(continent);
      setData(res);
    } catch (err) {
      console.error(err);
      setError({ msg: "Failed to fetch data", code: err.code });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!continent) return;
    fetchData(continent);
  }, []);

  return {
    isError,
    error,
    isLoading,
    data,
    fetchData,
  };
};

export default useContinentCovidInfo;
