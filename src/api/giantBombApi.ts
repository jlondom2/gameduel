import axios from "axios";

export const giantBombApi = axios.create({
  baseURL: `https://www.giantbomb.com/api/`,
  headers: {},
});
