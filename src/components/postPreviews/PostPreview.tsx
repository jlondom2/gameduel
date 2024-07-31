import { Link } from "@tanstack/react-router";
import { ArticleElement } from "../../interfaces/article";

interface Props {
  size?: string;
  article: ArticleElement;
}

export const PostPreview = ({ size, article }: Props) => {
  return (
    <div
      className={`post-preview picture ${size === "full" ? "big" : ""} game-review`}
    >
      <Link to="/">
        <div className="post-preview-img-wrap">
          <figure
            className="post-preview-img"
            style={{
              backgroundImage: `url(${article.image})`,
            }}
          >
            <img
              src="https://cdn2.unrealengine.com/a-beginner-s-guide-to-league-of-legends-teemo-1215x717-dc27844d5953.jpg"
              className="hidden w-full"
              alt="post-16"
            />
          </figure>

          <div className="post-preview-overlay">
            {size === "full" ? (
              <span className="tag-ornament">Game Reviews</span>
            ) : (
              ""
            )}

            <p className="post-preview-title font-exo font-bold uppercase">
              We reviewed the new Magimons game
            </p>

            {size === "full" ? (
              <p className={`post-preview-text`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
