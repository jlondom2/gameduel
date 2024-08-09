import { articlesApi } from "../api/articlesApi";
import { Article } from "../interfaces/article";

interface Props {
  query: string;
  pageSize: number;
  sortBy?: "publishedAt" | "relevance";
  page?: number;
}

export const getNews = async ({
  query,
  pageSize,
  sortBy,
  page,
}: Props): Promise<Article> => {
  const apiKey = "5a853043ea23c1584d0e19a8c1e3a529";

  //check if query includes an space in the last and clean it
  if (query[query.length - 1] === " ") {
    query = query.slice(0, -1);
  }

  const params = new URLSearchParams();
  params.append("sortby", sortBy || "publishedAt");
  params.append("max", pageSize.toString());
  params.append("apikey", apiKey);
  params.append("q", query);
  params.append("lang", "en");
  params.append("content", "expand");
  params.append("page", page?.toString() || "1");

  try {
    const { data } = await articlesApi.get<Article>(`/search?`, { params });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get News");
  }
};
