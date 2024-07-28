import axios from "axios";

export const articlesApi = axios.create({
  baseURL: `https://gnews.io/api/v4`,
  headers: {
    /*  Authorization: 'Bearer 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', */
  },
});
