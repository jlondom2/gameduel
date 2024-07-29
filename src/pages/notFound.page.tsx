import { LiveNews } from "../components";
import { PageBanner } from "../components/ui/PageBanner";
import errorImage from "../assets/error-img.png";

export const NotFound = () => {
  return (
    <>
      <div className="innerpage">
        <PageBanner title="404 Not Found" />

        <LiveNews />

        <div className="error-display container">
          <figure
            className="error-img liquid imgLiquid_bgSize imgLiquid_ready mb-11"
            style={{
              display: "block",
              backgroundImage: `url(${errorImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={errorImage} alt="error-img" style={{ display: "none" }} />
          </figure>

          <p className="error-title mt-8 uppercase">Oooooopsss!</p>

          <p className="error-subtitle uppercase">
            Seems that something went wrong
          </p>

          <p className="error-text">
            The page you are looking for has been moved or doesn’t exist
            anymore, if you like you can return to the previous page, or go to
            our main homepage. If the problem persists, please send us an email
            to{" "}
            <a className="highlight" href="mailto:info@pixeldiamonds.com">
              info@pixeldiamonds.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
