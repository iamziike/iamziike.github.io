import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url);
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
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
