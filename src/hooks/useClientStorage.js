import { useState } from 'react';

const useClientStorage = () => {
  const [isError, setIsError] = useState();

  const get = (type = '', key = '') => {
    setIsError(false);
    try {
      if (type.toLowerCase() === 'session' && key)
        return sessionStorage.getItem(key);
      else if (type.toLowerCase() === 'local' && key)
        return sessionStorage.getItem(key);
    } catch (error) {
      setIsError(true);
    }
  };

  const set = (type = '', key = '', value = '') => {
    setIsError(false);
    try {
      if (type.toLowerCase() === 'session' && key)
        return sessionStorage.setItem(key, value);
      else if (type.toLowerCase() === 'local' && key)
        return sessionStorage.setItem(key, value);
    } catch (error) {
      setIsError(false);
    }
  };

  return { get, set, isError };
};

export default useClientStorage;
