import { useState, useEffect, useRef } from "react";

export type TRequestInfo = {
  headers?: Record<string, any>;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
};

enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  SUCCESS_NO_CONTENT = 204,
}

type TRequestHook<T, G> = {
  data: T;
  error: G;
  isFetching: boolean;
  handleRequest: ({
    signal,
    requestBody,
  }: {
    signal?: AbortSignal;
    requestBody?: any;
  }) => Promise<void>;
};

export const useRequest = <T extends any, G extends any>(
  props: TRequestInfo
): TRequestHook<T, G> => {
  const [isFetching, setIsFetching] = useState(false);
  const [responseInfo, setResponseInfo] = useState({} as { data: T });
  const [error, setError] = useState(undefined as G);
  const unmounte = useRef(false);

  const handleRequest = async ({
    signal,
    requestBody,
  }: {
    signal?: AbortSignal;
    requestBody?: any;
  }) => {
    setIsFetching(true);
    try {
      const data = await service({ ...props, signal, requestBody });
      setResponseInfo((prev) => ({ ...prev, data }));
    } catch (error: any) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    handleRequest({ signal: controller?.signal });
    return () => {
      if (unmounte.current) {
        controller?.abort();
      }
      unmounte.current = true;
    };
  }, [props]);

  return {
    data: responseInfo?.data,
    error,
    isFetching,
    handleRequest,
  };
};

const service = (
  props: TRequestInfo & { signal?: AbortSignal; requestBody?: any }
) =>
  fetch(props.url, { ...props, body: JSON.stringify(props?.requestBody) })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
