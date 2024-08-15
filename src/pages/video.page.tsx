import { Sidebar } from "../components/Sidebar";
import { ErrorMessage } from "../components/ui/ErrorMessage";
import { FullScreenLoader } from "../components/ui/FullScreenLoader";
import { PageBanner } from "../components/ui/PageBanner";
import { FeaturedVideo } from "../components/videos/FeaturedVideo";
import { useVideos } from "../hooks";

export const VideoPage = () => {
  const videoParams = {
    channel: "UCXa_bzvv7Oo1glaW9FldDhQ",
    maxResults: "10",
  };

  const { queryVideos } = useVideos(videoParams);

  const { data, isError, isLoading } = queryVideos;

  if (isLoading) return <FullScreenLoader />;

  return (
    <>
      <PageBanner title={`Videos`} />
      <div className="container max-w-screen-xl py-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-10">
          <div className="col-span-1 md:col-span-8">
            <div className="section-title-wrap blue">
              <h2 className="section-title medium">Videos</h2>
              <div className="section-title-separator"></div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-10">
              {isError ? (
                <ErrorMessage message="Error Getting Videos, please regresh the page" />
              ) : (
                data?.items.map((video) => (
                  <div
                    className="post-open game-review col-span-1 mb-7 md:col-span-10"
                    key={video.snippet.title}
                  >
                    <FeaturedVideo video={video} />

                    <div className="section-title-separator"></div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
