import star from "../assets/live-news-icon.png";
import { useArticles } from "../hooks/useArticles";

export const LiveNews = () => {
  const { queryArticles } = useArticles({
    query: "videogames",
    pageSize: 7,
    sortBy: "publishedAt",
  });

  const { data } = queryArticles;

  return (
    <div>
      <div className="live-news-widget-wrap">
        <div className="live-news-widget grid-limit mx-auto max-w-screen-xl">
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
              {data?.articles.map((article) => (
                <a
                  href={article.url}
                  target="_blank"
                  style={{ display: "inline-block" }}
                  key={article.title}
                >
                  <span key={article.title}>{article.title}</span>

                  <span className="separator">
                    <span className="separator-bar">/</span>
                    <span className="separator-bar">/</span>
                  </span>
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
