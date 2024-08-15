import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../services/youtube.service";

interface Props {
  channel: string;
  maxResults: string;
}

export const useVideos = (videoParams: Props) => {
  const queryVideos = useQuery({
    queryKey: ["Youtube videos"],
    queryFn: () => getVideos(videoParams),
  });
  return {
    queryVideos,
  };
};
