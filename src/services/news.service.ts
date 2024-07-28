import { articlesApi } from "../api/articlesApi";
import { Article } from "../interfaces/article";

interface Props {
  query: string;
  pageSize: number;
}

export const getNews = async ({ query, pageSize }: Props): Promise<Article> => {
  const apiKey = "5a853043ea23c1584d0e19a8c1e3a529";

  const params = new URLSearchParams();
  params.append("q", "videogames");
  params.append("sortby", "publishedAt");
  params.append("max", pageSize.toString());
  params.append("apikey", apiKey);
  params.append("q", query);
  params.append("lang", "en");

  try {
    const { data } = await articlesApi.get<Article>(`/search?`, { params });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get News");
  }
};