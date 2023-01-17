import { useCallback, useEffect, useMemo, useState } from "react";
import { getCountryISOCode } from "../../../api/covid.api";

const useCountryISOCode = () => {
  const [data, setData] = useState();
  const [error, setError] = useState({ msg: "", code: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const isError = useMemo(() => error.msg !== "", [error]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getCountryISOCode();
      setData(res);
      // console.log("iso:", error, isLoading, isError);
    } catch (err) {
      console.error(err);
      setError({ msg: "Failed to fetch data", code: err.code });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isError,
    error,
    isLoading,
    data,
    fetchData,
  };
};

export default useCountryISOCode;
