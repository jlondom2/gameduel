import ReactPlayer from "react-player";
import useNewsStore from "../../stores/news.store";

import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { VideoItems } from "../../interfaces/video";
import { LoaderSmall } from "../ui/LoaderSmall";

interface Props {
  video: VideoItems;
}

export const FeaturedVideo = ({ video }: Props) => {
  const animate = useNewsStore((state) => state.animate);

  const handleAnimation = useNewsStore((state) => state.handleAnimation);

  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimer(true);
    setTimeout(() => {
      setTimer(false);
    }, 500);
  }, [video]);

  useEffect(() => {
    if (animate) {
      gsap
        .fromTo(
          ".post-open-content",
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
        )
        .then(() => {
          handleAnimation(false);
        });
    }
  }, [animate, handleAnimation]);
  return (
    <div className={`post-open-content v5`}>
      <div className="post-open-body">
        <div className="post-open-media-wrap">
          <div className="post-open-media">
            {timer ? (
              <LoaderSmall />
            ) : (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                width={"100%"}
                height={"500px"}
              />
            )}
          </div>
        </div>

        <div className="tag-list">
          <a className="tag-ornament video">Video</a>
        </div>
        <p className="post-open-title small">{video.snippet.title}</p>
        <div className="post-author-info-wrap mb-2">
          <a href="" target="_blank">
            <figure
              className="user-avatar tiny liquid"
              style={{
                backgroundImage: `url("${video.snippet.thumbnails.default.url}")`,
                backgroundSize: "cover",
              }}
            >
              <img
                src={video.snippet.thumbnails.default.url}
                style={{ display: "none" }}
              />
            </figure>
          </a>
          <p className="post-author-info small light">
            By{" "}
            <a href="" target="_blank" className="post-author">
              {video.snippet.channelTitle}
            </a>
            <span className="separator">|</span>December 15th, 2018
            <span className="separator">|</span>
            <span className="post-comment-count">
              {new Date(video.snippet.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </div>
        {/* /POST AUTHOR INFO */}
        {/* POST OPEN TEXT */}
        <p className="post-open-text">{video.snippet.description}</p>
      </div>

      {/* /POST OPEN BODY */}
    </div>
  );
};
