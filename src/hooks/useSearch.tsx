import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/news.service";

interface Props {
  query: string;
  pageSize: number;
}

export const useSearchHook = ({ query, pageSize }: Props) => {
  const querySearch = useQuery({
    queryKey: ["search-results", query],
    queryFn: () => getNews({ query, pageSize }),
  });

  return { querySearch };
};
