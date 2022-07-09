import { useEffect } from "react";
import useSWR from "swr";

/**
 * Este hook permite hacer peticiones get y guardarlas en cache
 * Debe usarse en conjunto con SUSPENSE de React
 */

export const useFetchSWR = (key: String, opciones: Object) => {
  const controller = new AbortController();
  const { data } = useSWR(
    import.meta.env.VITE_BASE_URL + key,
    (args: RequestInfo) => {
      return fetch(args, { signal: controller.signal })
        .then((res) => {
          return res.json();
        })
        .catch((e) => {
          console.log(e);
          return {
            ok: false,
            message: e,
          };
        });
    },
    {
      revalidateOnMount: true,
      suspense: true,
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      ...opciones,
    }
  );
  const cancelEndpoint = () => {
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);
  return [data];
};
