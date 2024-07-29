import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/news.service";
import useNewsStore from "../stores/news.store";

interface Props {
  query: string;
  pageSize: number;
}

// create an interface Props that will have two properties query and pageSize both of type string.
// create a custom hook useNews that will take an object of type Props and return an object with the queryArticles property.
// queryArticles will be set to the result of useQuery hook that will take an object with the queryKey of ["articles"] and queryFn that will call the getNews function with the query and pageSize.
// export the useNews hook.

export const useNews = ({ query, pageSize }: Props) => {
  const news = useNewsStore((state) => state.news);
  const queryArticles = useQuery({
    queryKey: ["articles"],
    queryFn: () => getNews({ query, pageSize }),
    staleTime: 1000 * 60 * 60 * 4, // 4 hours
    enabled: news.length === 0,
  });

  return { queryArticles };
};
