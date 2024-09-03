import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/news.service";

interface Props {
  query: string;
  pageSize: number;
  sortBy?: "publishedAt" | "relevance";
  page: number;
}

export const useSearchHook = ({ query, pageSize, sortBy, page }: Props) => {
  const querySearch = useQuery({
    queryKey: ["search-results", query, pageSize, sortBy, page],
    queryFn: () => getNews({ query, pageSize, sortBy, page }),
  });

  return { querySearch };
};
