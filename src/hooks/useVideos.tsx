import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../services/giantbomb.service";

export const useVideos = () => {
  const queryVideos = useQuery({
    queryKey: ["videos"],
    queryFn: () => getVideos(),
  });
  return {
    queryVideos,
  };
};
