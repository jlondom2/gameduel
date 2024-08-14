import { FaPlay } from "react-icons/fa";
import { VideoItems } from "../../interfaces/video";
import useNewsStore from "../../stores/news.store";

interface Props {
  key?: number;
  video: VideoItems;
}
export const SmallVideo = ({ video }: Props) => {
  /*  const convertSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`;
  }; */

  const setFeaturedVideo = useNewsStore((state) => state.setFeaturedVideo);

  const handleAnimation = useNewsStore((state) => state.handleAnimation);

  const handleVideos = (video: VideoItems) => {
    handleAnimation(true);
    setFeaturedVideo(video);
  };

  return (
    <div
      className="post-preview-showcase mb-3 cursor-pointer"
      onClick={() => handleVideos(video)}
    >
      {/* POST PREVIEW */}
      <div className="post-preview video gaming-news tiny no-hover negative">
        <div>
          <div className="post-preview-img-wrap">
            <figure className="post-preview-img liquid">
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
            </figure>
            <div className="post-preview-overlay">
              <div className="play-button tiny">
                <FaPlay />
              </div>
            </div>
          </div>
        </div>
        <div className="post-preview-title">{video.snippet.title}</div>
        <div className="post-author-info-wrap">
          <p className="post-author-info small light">
            By <span className="post-author">{video.snippet.channelTitle}</span>
            <span className="separator">|</span>{" "}
            {new Date(video.snippet.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
