import { useEffect, useState } from "react";

export const useService = <T extends any, G extends any>(
  service: () => Promise<T>
) => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState(undefined as T);
  const [error, setError] = useState(undefined as G);

  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    service()
      .then((data) => setData(data))
      .catch((er) => setError(er))
      .finally(() => setisLoading(false));
    return () => {
      controller?.abort();
    };
  }, []);

  const mutate = (fun: () => Promise<any>) => {
    setisLoading(true);
    fun()
      .then((data) => setData(data))
      .catch((er) => setError(er))
      .finally(() => setisLoading(false));
  };

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
