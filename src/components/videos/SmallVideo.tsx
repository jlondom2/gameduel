import { FaPlay } from "react-icons/fa";
import { VideoResult } from "../../interfaces/video";
import useNewsStore from "../../stores/news.store";

interface Props {
  key?: number;
  video: VideoResult;
}
export const SmallVideo = ({ video }: Props) => {
  const convertSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`;
  };

  const setFeaturedVideo = useNewsStore((state) => state.setFeaturedVideo);

  const handleVideos = (video: VideoResult) => {
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
              <img src={video.image.original_url} alt={video.name} />
            </figure>
            <div className="post-preview-overlay">
              <div className="play-button tiny">
                <FaPlay />
              </div>
              <p className="timestamp-tag tiny">
                {convertSeconds(video.length_seconds)}
              </p>
            </div>
          </div>
        </div>
        <div className="post-preview-title">{video.name}</div>
        <div className="post-author-info-wrap">
          <p className="post-author-info small light">
            By <span className="post-author">{video.user}</span>
            <span className="separator">|</span>{" "}
            {new Date(video.publish_date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
