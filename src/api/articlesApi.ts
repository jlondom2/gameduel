import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();
console.log("🚀 ~ VITE_API_URL:", VITE_API_URL);

export const articlesApi = axios.create({
  baseURL: VITE_API_URL,
  headers: {},
});
