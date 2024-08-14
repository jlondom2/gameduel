import { youtubeApi } from "../api/youtubeApi";
import { Video } from "../interfaces/video";

export const getVideos = async (): Promise<Video> => {
  const apiKey = "AIzaSyA07YAReDyk2FOq6kdGwItiepAKz7Kekhc";

  //www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=AIzaSyA07YAReDyk2FOq6kdGwItiepAKz7Kekhc

  const params = new URLSearchParams();
  params.append("key", apiKey);
  params.append("part", "snippet");
  params.append("maxResults", "10");
  params.append("channelId", "UCNvzD7Z-g64bPXxGzaQaa4g");
  params.append("type", "video");
  params.append("order", "date");

  try {
    const { data } = await youtubeApi.get<Video>("/search", { params });

    return data;
  } catch (error) {
    console.error("getVideos error: ", error);
    throw new Error("Failed to fetch videos");
  }
};
