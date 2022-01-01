import { useEffect, useState } from 'react';
import { fetchNumberOfTheDay } from '../api/fetchNumberOfTheDay';

export const useMathNumberOfTheDay = () => {
  const [value, setValue] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => fetchNumberOfTheDay(setValue, setErrorMessage), []);

  return {
    value,
    errorMessage,
  };
};
