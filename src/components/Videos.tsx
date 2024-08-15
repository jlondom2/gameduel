import { useVideos } from "../hooks";
import { FeaturedVideo } from "./videos/FeaturedVideo";
import { SmallVideo } from "./videos/SmallVideo";
import useNewsStore from "../stores/news.store";
import { useEffect } from "react";
import { ErrorMessage } from "./ui/ErrorMessage";

export const Videos = () => {
  const videoParams = {
    channel: "UCNvzD7Z-g64bPXxGzaQaa4g",
    maxResults: "10",
  };
  const { queryVideos } = useVideos(videoParams);

  const { data, isError, isFetched } = queryVideos;

  const videosFetched = data?.items;

  const setVideos = useNewsStore((state) => state.setVideos);
  const setFeaturedVideo = useNewsStore((state) => state.setFeaturedVideo);
  const handleAnimation = useNewsStore((state) => state.handleAnimation);
  const videos = useNewsStore((state) => state.videos);

  const featuredVideo = useNewsStore((state) => state.featuredVideo);

  useEffect(() => {
    if (isFetched && videosFetched) {
      console.log("videos changed");
      setVideos(videosFetched);
      setFeaturedVideo(videosFetched[0]);
    }
  }, [videosFetched, isFetched, setVideos, setFeaturedVideo, handleAnimation]);

  if (isError) return <ErrorMessage message="Error Getting Videos" />;

  return (
    <div className="section-bg">
      <div className="container max-w-screen-xl py-20">
        <div className="grid grid-cols-10 gap-5">
          <div className="post-open game-review negative col-span-7">
            {featuredVideo && <FeaturedVideo video={featuredVideo} />}
          </div>

          <div className="col-span-3">
            {videos?.map((video) => (
              <SmallVideo key={Number(video.id)} video={video} />
            ))}
          </div>
        </div>
      </div>
      {/* /LAYOUT CONTENT 1 */}
    </div>
  );
};
