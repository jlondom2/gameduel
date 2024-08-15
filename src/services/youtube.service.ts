import { youtubeApi } from "../api/youtubeApi";
import { Video } from "../interfaces/video";

interface Props {
  channel: string;
  maxResults: string;
}

export const getVideos = async (videoParams: Props): Promise<Video> => {
  const apiKey = "AIzaSyA07YAReDyk2FOq6kdGwItiepAKz7Kekhc";

  const params = new URLSearchParams();
  params.append("key", apiKey);
  params.append("part", "snippet");
  params.append("maxResults", videoParams.maxResults);
  params.append("channelId", videoParams.channel);
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

//CHANNEL FOR VIDEOS PAGE: UCXa_bzvv7Oo1glaW9FldDhQ
