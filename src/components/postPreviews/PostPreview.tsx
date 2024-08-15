import { ArticleElement } from "../../interfaces/article";

interface Props {
  size?: string;
  article: ArticleElement;
}

export const PostPreview = ({ size, article }: Props) => {
  return (
    <div className={`post-preview picture ${size === "full" ? "big" : ""} `}>
      <a href={article.url} target="_blank">
        <div className="post-preview-img-wrap">
          {size !== "full" ? (
            <span className={`tag-ornament bg-purple-100`}>
              {article.source.name}
            </span>
          ) : (
            ""
          )}
          <figure
            className="post-preview-img"
            style={{
              backgroundImage: `url(${article.image})`,
            }}
          >
            <img src={article.image} className="hidden w-full" alt="post-16" />
          </figure>

          <div className="post-preview-overlay">
            {size === "full" ? (
              <span className="tag-ornament">{article.source.name}</span>
            ) : (
              ""
            )}

            <p className="post-preview-title font-exo font-bold uppercase">
              {article.title.slice(0, 90)}...
            </p>

            {size === "full" ? (
              <p className={`post-preview-text`}>{article.description}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
