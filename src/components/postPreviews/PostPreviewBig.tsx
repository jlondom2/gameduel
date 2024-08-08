import { ArticleElement } from "../../interfaces/article";

interface Props {
  article: ArticleElement;
  key?: string;
  index?: number;
}

export const PostPreviewBig = ({ article, index = 1 }: Props) => {
  return (
    <div>
      <div
        className={`post-preview big ${index % 2 === 0 ? "orpurple" : "orblu"} mb-7`}
      >
        {/* POST PREVIEW IMG WRAP */}
        <a href="">
          <div className="post-preview-img-wrap mb-4">
            {/* POST PREVIEW IMG */}
            <figure
              className="post-preview-img liquid imgLiquid_bgSize imgLiquid_ready"
              style={{
                backgroundImage: `url("${article.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={{ display: "none" }}
              />
            </figure>
            {/* POST PREVIEW IMG */}
          </div>
        </a>
        {/* /POST PREVIEW IMG WRAP */}
        {/* TAG ORNAMENT */}
        <a href="" className="tag-ornament">
          {article.source.name}
        </a>
        {/* /TAG ORNAMENT */}
        {/* POST PREVIEW TITLE */}
        <a href="" className="post-preview-title mt-4">
          {article.title}
        </a>
        {/* POST AUTHOR INFO */}
        <div className="post-author-info-wrap">
          <p className="post-author-info small light">
            By{" "}
            <a href="#" className="post-author">
              {article.source.name}
            </a>
            <span className="separator">|</span>
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>

        <p className="post-preview-text">
          {article.content.substring(0, 800)} ...
        </p>
      </div>
    </div>
  );
};
