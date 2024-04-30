import { useEffect, useState } from "react";

const promiseWrapper = (promise) => {
  let status = "pending";
  let result;

  const s = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return () => {
    switch (status) {
      case "pending":
        throw s;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};

function useGetData(url: string) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const promise = fetch(url).then((response) => response.json());

      setResource(promiseWrapper(promise));
    };

    getData();
  }, [url]);

  return resource;
}

function PostsComponet() {
  const data = useGetData("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default PostsComponet;
