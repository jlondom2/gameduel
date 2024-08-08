import { VideoResult } from "../../interfaces/video";
import ReactPlayer from "react-player";

interface Props {
  video: VideoResult;
  animate?: boolean;
}

export const FeaturedVideo = ({ video, animate }: Props) => {
  return (
    <div className={`post-open-content v5 ${animate ? "animate" : ""}`}>
      <div className="post-open-body">
        <div className="post-open-media-wrap">
          <div className="post-open-media">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.youtube_id}`}
              width={"100%"}
              height={"500px"}
            />
          </div>
        </div>

        <div className="tag-list">
          <a href="browse-videos.html" className="tag-ornament video">
            Video
          </a>
          <a href="news-v2.html" className="tag-ornament">
            Game Reviews
          </a>
        </div>
        <p className="post-open-title small">{video.name}</p>
        <div className="post-author-info-wrap mb-2">
          <a href={video.video_show?.site_detail_url} target="_blank">
            <figure
              className="user-avatar tiny liquid"
              style={{
                backgroundImage: `url("${video.video_show.logo?.super_url}")`,
                backgroundSize: "cover",
              }}
            >
              <img
                src={video.video_show.logo?.super_url}
                style={{ display: "none" }}
              />
            </figure>
          </a>
          <p className="post-author-info small light">
            By{" "}
            <a
              href={video.video_show.site_detail_url}
              target="_blank"
              className="post-author"
            >
              {video.user}
            </a>
            <span className="separator">|</span>December 15th, 2018
            <span className="separator">|</span>
            <a className="post-comment-count">{video.video_type}</a>
          </p>
        </div>
        {/* /POST AUTHOR INFO */}
        {/* POST OPEN TEXT */}
        <p className="post-open-text">{video.deck}</p>
      </div>
      {/* /POST OPEN BODY */}
    </div>
  );
};
