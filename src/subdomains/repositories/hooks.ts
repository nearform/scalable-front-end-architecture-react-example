import { useQuery } from "urql";
import { queries } from "./queries";
import { Repository } from "./repository.entity";

export const useGetTenRepositories = () => {
  const [result] = useQuery({
    query: queries.GetFirstTenRepositories,
  });

  return {
    data:
      result.data?.user?.repositories?.nodes?.map(
        (node: any) => new Repository(node)
      ) || [],
    error: result.error,
    isFetching: result.fetching,
  };
};
