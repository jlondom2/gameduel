import { giantBombApi } from "../api/giantBombApi";
import { Video } from "../interfaces/video";

export const getVideos = async (): Promise<Video> => {
  const apiKey = "af10d069eae5697736adcee9f5b412b3b3722553";

  const params = new URLSearchParams();

  params.append("api_key", apiKey);
  params.append("format", "json");
  params.append("limit", "10");

  try {
    const { data } = await giantBombApi.get<Video>("videos", { params });
    return data;
  } catch (error) {
    console.error("getVideos error: ", error);
    throw new Error("Failed to fetch videos");
  }

  /* params.append("sort", "publish_date: desc"); */
};
