import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = async (url) => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Error desconocido",
          };
        }

        const json = await res.json();
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!signal.aborted) setIsPending(false);
      }
    };

    getData(url);

    return () => controller.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};
