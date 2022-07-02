import { TRequestInfo, useRequest } from "../hooks/useRequest";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const reqObj: TRequestInfo = {
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts?limit=10",
};

export const App = () => {
  const { data, isFetching, error, handleRequest } =
    useRequest<TPost[], { message: string }>(reqObj);

  const addPostHandler = (e: any) => {
    const postObj = {
      userId: 1,
      title: e.target.value,
      body: "body content here...",
    };

    handleRequest({ requestBody: postObj });
  };

  if (isFetching) {
    return <p>fetching data...!</p>;
  } else if (error) {
    return <p>error: {error?.message}</p>;
  }
  return (
    <div>
      <input
        placeholder="Enter post title"
        style={{ border: "1px solid black" }}
      />
      <button
        onClick={(e) => addPostHandler(e)}
        style={{
          border: "1px solid black",
          padding: "0 10px",
          background: "#ccc",
        }}
      >
        Add Post
      </button>
      <hr />
      <ul>
        {data?.map((item: TPost) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
