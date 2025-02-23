import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const Todos = () => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
      return [];
    },
  });
  const mutation = useMutation({
    mutationFn: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const upData = () => {
    mutation.mutate({});
  };
  useEffect(() => {
    console.log("query.data", query.data);
  }, [query.data]);

  return <></>;
};
