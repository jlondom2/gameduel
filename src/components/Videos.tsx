import { ErrorComponent } from "@tanstack/react-router";
import { useVideos } from "../hooks";
import { FeaturedVideo } from "./videos/FeaturedVideo";
import { SmallVideo } from "./videos/SmallVideo";
import useNewsStore from "../stores/news.store";
import { useEffect } from "react";

export const Videos = () => {
  const { queryVideos } = useVideos();

  const { data, isError, isFetched } = queryVideos;

  const videosFetched = data?.results;

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

  if (isError) return <ErrorComponent error="Error Loading Videos" />;

  return (
    <div className="section-bg">
      <div className="container max-w-screen-xl py-32">
        <div className="grid grid-cols-10 gap-5">
          <div className="post-open game-review negative col-span-7">
            {featuredVideo && <FeaturedVideo video={featuredVideo} />}
          </div>

          <div className="col-span-3">
            {videos?.map((video) => (
              <SmallVideo key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
      {/* /LAYOUT CONTENT 1 */}
    </div>
  );
};
