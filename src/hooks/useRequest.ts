import { useState, useEffect } from "react";

type TRequestInfo = {
  Headers?: {};
  Method?: string; // "GET" or "PUT" or "POST" or "PATCH"
  Url: string;
  RequestBody?: object;
};

type TResponseInfo = {
  data: any;
  hasError: boolean;
};

enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  SUCCESS_NO_CONTENT = 204,
}

const useRequest = (props: TRequestInfo): [TResponseInfo, boolean] => {
  const [isFetching, setIsFetching] = useState(false);
  const [requestInfo, setRequestInfo] = useState(props);
  const [responseInfo, setResponseInfo] = useState<TResponseInfo>(
    {} as TResponseInfo
  );

  useEffect(() => {
    const promise = new Promise((resolve: any, reject: any) => {
      const fetchURL = requestInfo.Url;
      const fetchData = {
        ...(requestInfo.Method !== "GET" && {
          body: requestInfo.RequestBody
            ? JSON.stringify(requestInfo.RequestBody)
            : "",
        }),
        headers: requestInfo.Headers ? requestInfo.Headers : {},
        method: requestInfo.Method,
      };

      fetch(fetchURL, fetchData)
        .then((response: Response) => {
          switch (response.status) {
            case HttpStatusCode.OK:
            case HttpStatusCode.CREATED:
            case HttpStatusCode.SUCCESS_NO_CONTENT:
              response
                .clone()
                .json()
                .then((data: any) => {
                  resolve(data);
                })
                .catch((err) => {
                  console.log(err);
                  resolve(null);
                });
              break;
            default:
              response
                .clone()
                .json()
                .then((data: any) => {
                  reject(data);
                })
                .catch((err) => {
                  console.log(err);
                  reject(null);
                });
          }
        })
        .catch((error: Error) => {
          console.log(error);
          reject(error);
        });
    });

    setIsFetching(true);

    promise.then(
      (httpResponse: any) => {
        setResponseInfo({ data: httpResponse, hasError: false });
        setIsFetching(false);
      },
      (error: Error) => {
        setResponseInfo({ data: error, hasError: true });
        setIsFetching(false);
      }
    );
  }, [requestInfo]);

  return [responseInfo, isFetching];
};

export default useRequest;
