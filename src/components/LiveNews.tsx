import star from "../assets/live-news-icon.png";

export const LiveNews = () => {
  return (
    <div>
      <div className="live-news-widget-wrap">
        <div className="live-news-widget grid-limit">
          <div className="live-news-widget-stairs left red">
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
          </div>

          <div className="live-news-widget-stairs right blue">
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
            <div className="live-news-widget-stair"></div>
          </div>

          <div className="live-news-widget-title-wrap">
            <img
              className="live-news-widget-icon"
              src={star}
              alt="live-news-icon"
            />
            <p className="live-news-widget-title">Live News</p>
          </div>

          <div id="lineslide-wrap1" className="live-news-widget-text-wrap">
            <p className="live-news-widget-text">
              <a href="#" className="text-white">
                {" "}
                Lorem ipsum dolor sit amet consectetur
              </a>{" "}
              adipisicing elit. Provident quasi praesentium natus dolore dolorum
              <span className="separator">
                <span className="separator-bar">/</span>
                <span className="separator-bar">/</span>
              </span>
              beatae aspernatur facere minus quos ut accusantium, cupiditate
              sunt esse accusamus odit delectus quia voluptatem consequatur.
              <span className="separator">
                <span className="separator-bar">/</span>
                <span className="separator-bar">/</span>
              </span>
              beatae aspernatur facere minus quos ut accusantium, cupiditate
              sunt esse accusamus odit delectus quia voluptatem consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
