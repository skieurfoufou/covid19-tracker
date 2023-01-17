import { useEffect, useMemo, useState } from "react";
import { getWorldwideCovidInfo } from "../../../api/covid.api";

const useWorldwideCovidInfo = () => {
  const [data, setData] = useState();
  const [error, setError] = useState({ msg: "", code: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const isError = useMemo(() => error.msg !== "", [error]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getWorldwideCovidInfo();
      setData(res);
    } catch (err) {
      console.error(err);
      setError({ msg: "Failed to fetch data", code: err.code });
    }
    setIsLoading(false);
  };

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

export default useWorldwideCovidInfo;
