import { useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const App = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const reqObj = {
    Method: "GET",
    Url: "https://jsonplaceholder.typicode.com/posts?limit=10",
  };

  const [responseInfo, isFetching] = useRequest(reqObj);

  useEffect(() => {
    if (isFetching === false && responseInfo && responseInfo.data)
      setPosts(responseInfo.data);
  }, [responseInfo]);

  const addPostHandler = (e: any) => {
    const postObj = {
      userId: 1,
      title: e.target.value,
      body: "body content here...",
    };
    const reqObj = {
      body: postObj,
      Headers: { "Content-type": "application/json; charset=UTF-8" },
      Method: "POST",
      Url: "https://jsonplaceholder.typicode.com/posts?limit=10",
    };
    // const [responseInfo, isFetching] = useRequest(reqObj);
    // console.log(responseInfo);
  };

  if (isFetching) {
    return <p>fetching data...!</p>;
  }
  return (
    <div>
      {" "}
      <input placeholder="Enter post title" style={{border: '1px solid black'}} />
      <button onClick={(e) => addPostHandler(e)} style={{border: '1px solid black', padding: '0 10px', background: '#ccc'}}>Add Post</button>
      <hr />
      <ul>
        {posts &&
          posts.map((item: TPost) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
};
