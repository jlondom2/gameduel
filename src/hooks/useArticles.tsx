import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/news.service";

interface Props {
  query: string;
  pageSize: number;
  sortBy?: "publishedAt" | "relevance";
}

// create an interface Props that will have three properties query, pageSize, and sortBy both of type string.

// The useArticles custom hook will take in the query, pageSize, and sortBy props and return the query

// The component will use the useArticles custom hook to fetch the articles based on the query, pageSize,

// and display the fetched articles.

// Add error handling for the fetch request and display an error message if there is an issuee

export const useArticles = ({ query, pageSize, sortBy }: Props) => {
  const queryArticles = useQuery({
    queryKey: ["VideoGames"],
    queryFn: () => getNews({ query, pageSize, sortBy }),
    staleTime: 1000 * 60 * 60 * 4, // 4 hours
  });

  return { queryArticles };
};
