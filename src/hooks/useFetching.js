import { useState } from "react";

export const useFetching = (fetchFunc) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await fetchFunc();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
}