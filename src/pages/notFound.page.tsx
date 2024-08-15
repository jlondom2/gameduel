import { PageBanner } from "../components/ui/PageBanner";
import errorImage from "../assets/error-img.png";
import { Button } from "../components/ui/Button";

export const NotFound = () => {
  return (
    <>
      <div className="innerpage">
        <PageBanner title="404 Not Found" />

        <div className="error-display container max-w-screen-xl">
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
            our main homepage.
          </p>

          <div className="flex justify-center p-8 text-center">
            <Button color="text-white" bg="bg-purple-100" size="big" to="/">
              {"Go to Homepage"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
