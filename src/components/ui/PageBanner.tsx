import pixelbanner from "../../assets/pixel-banner.jpg";
import { LiveNews } from "../LiveNews";

interface Props {
  title: string;
}

export const PageBanner = ({ title }: Props) => {
  return (
    <>
      <div
        className="banner-wrap forum-banner"
        style={{
          backgroundImage: `url(${pixelbanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner grid-limit">
          <h2 className="banner-title">{title}</h2>
        </div>
      </div>
      <LiveNews />
    </>
  );
};
