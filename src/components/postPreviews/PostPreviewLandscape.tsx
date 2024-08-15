import { Link } from "@tanstack/react-router";
import { ArticleElement } from "../../interfaces/article";

interface Props {
  article: ArticleElement; // replace with Article type when available
  size?: "small" | "big";
  index?: number;
}
export const PostPreviewLandscape = ({ article, size, index = 1 }: Props) => {
  return (
    <>
      <div
        className={`post-preview landscape ${size || ""} ${index % 2 === 0 ? "orpurple" : "orblu"} mb-5`}
      >
        <a href={article.url} target="_blank">
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

        <p className="post-preview-text">{article.description}</p>
        <div className="my-5">
          <a
            href={article.url}
            target="_blank"
            className="rounded-full bg-gray-dark p-1 px-3 text-sm text-white"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </>
  );
};
