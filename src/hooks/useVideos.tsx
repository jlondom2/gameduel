import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../services/youtube.service";

export const useVideos = () => {
  const queryVideos = useQuery({
    queryKey: ["Youtube videos"],
    queryFn: () => getVideos(),
  });
  return {
    queryVideos,
  };
};
