import { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url, {
          ...options,
          signal: abortController.signal,
        });
        if (!response.ok) throw new Error();
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
