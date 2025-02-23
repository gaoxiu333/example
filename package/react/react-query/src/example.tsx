import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function Example() {
  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ["repoData"],
    // enabled: false,
    staleTime:100,
    gcTime:10,
    // refetchInterval:1000,
    queryFn: async () => {
      const response = await fetch("https://randomuser.me/api/");
      return await response.json();
    },
  });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  useEffect(() => {
    console.log("data", data);
  }, []);

  return (
    <div>
      {/* <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong> */}
      <div>{isFetching ? "Updating..." : ""}</div>
      <button onClick={() => refetch()}>refresh</button>
    </div>
  );
}
