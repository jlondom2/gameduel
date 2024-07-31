import { Link } from "@tanstack/react-router";
import { ArticleElement } from "../../interfaces/article";

interface Props {
  article: ArticleElement; // replace with Article type when available
}
export const PostPreviewLandscape = ({ article }: Props) => {
  console.log("🚀 ~ PostPreviewLandscape ~ article:", article);
  return (
    <>
      <div className="post-preview landscape gaming-news mb-5">
        <a href="post-v1.html">
          <div className="post-preview-img-wrap">
            <figure
              className="post-preview-img liquid imgLiquid_bgSize imgLiquid_ready"
              style={{
                backgroundImage: `url("${article.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src="img/posts/13.jpg" alt="post-13" className="hidden" />
            </figure>
          </div>
        </a>

        <span className="tag-ornament">{article.source.name}</span>

        <h3 className="post-preview-title">{article.title}</h3>

        <div className="post-author-info-wrap">
          <p className="post-author-info small light">
            By{" "}
            <Link to={article.source.url} className="post-author">
              {article.source.name}
            </Link>
            <span className="separator">|</span>{" "}
            {article.publishedAt.toString()}
          </p>
        </div>

        <p className="post-preview-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut ore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </>
  );
};
