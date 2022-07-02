import { useService } from "hooks/use-service";

const fetcher = (url: string): Promise<{ name: string }[]> =>
  fetch(url)
    .then((res) => res.json())
    .catch((er) => {
      throw er;
    });

const poster = (url: string, body: any): Promise<{ name: string }[]> =>
  fetch(url, { method: "POST", body })
    .then((res) => res.json())
    .catch((er) => {
      throw er;
    });

type TData = { name: string };
type TError = { message: string };

export const App = () => {
  const { data, error, isLoading, mutate } = useService<TData[], TError>(() =>
    fetcher("https://api.github.com/users/octocat")
  );

  const handlePost = () =>
    poster("https://api.github.com/users/octocat", {
      title: "hello",
      body: "test",
    });

  return (
    <div>
      {data?.map((post) => (
        <>{post.name}</>
      ))}
    </div>
  );
};
