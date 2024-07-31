import axios from "axios";

export const articlesApi = axios.create({
  baseURL: `https://gnews.io/api/v4`,
  headers: {},
});
