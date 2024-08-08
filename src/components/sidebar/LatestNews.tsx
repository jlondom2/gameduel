import { useArticles } from "../../hooks/useArticles";

import icon from "../../assets/icon.png";

export const LatestNews = () => {
  const { queryArticles } = useArticles({
    query: "console games",
    pageSize: 10,
    sortBy: "publishedAt",
  });

  const { data, isLoading, isError } = queryArticles;

  if (isLoading || isError) return;

  return (
    <>
      <div className="section-title-wrap blue">
        <h2 className="section-title medium">Latest News</h2>
        <div className="section-title-separator" />
      </div>

      <div className="post-preview-showcase grid-1col centered gutter-small">
        {/* POST PREVIEW */}

        {data?.articles?.map((article) => (
          <div
            className="post-preview tiny gaming-news mb-3"
            key={article.title}
          >
            {/* POST PREVIEW IMG WRAP */}
            <a href={article.url} target="_blank">
              <div className="post-preview-img-wrap">
                {/* POST PREVIEW IMG */}
                <figure
                  className="post-preview-img liquid imgLiquid_bgSize imgLiquid_ready"
                  style={{
                    backgroundImage: `url("${article.image || icon}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img
                    src={article.image || icon}
                    alt={article.title}
                    style={{ display: "none" }}
                  />
                </figure>
                {/* /POST PREVIEW IMG */}
              </div>
            </a>
            {/* /POST PREVIEW IMG WRAP */}
            {/* POST PREVIEW TITLE */}
            <a
              href={article.url}
              target="_blank"
              className="post-preview-title"
            >
              {article.title.substring(0, 50)}...
            </a>
            {/* POST AUTHOR INFO */}
            <div className="post-author-info-wrap">
              <p className="post-author-info small light">
                By{" "}
                <a href="search-results.html" className="post-author">
                  {article.source.name}
                </a>
                <span className="separator">|</span>
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
            {/* /POST AUTHOR INFO */}
          </div>
        ))}

        {/* /POST PREVIEW */}
      </div>
    </>
  );
};
