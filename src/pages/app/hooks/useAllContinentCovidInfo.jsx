import { useCallback, useEffect, useMemo, useState } from "react";
import { getAllContinentCovidInfo } from "../../../api/covid.api";

const useAllContinentCovidInfo = () => {
  const [data, setData] = useState();
  const [error, setError] = useState({ msg: "", code: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const isError = useMemo(() => error.msg !== "", [error]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAllContinentCovidInfo();
      setData(res);
    } catch (err) {
      console.error(err);
      setError({ msg: "Failed to fetch data", code: err.code });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isError,
    error,
    isLoading,
    data,
    fetchData,
  };
};

export default useAllContinentCovidInfo;
