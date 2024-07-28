import { LiveNews } from "../components/LiveNews";
import { PostPreview } from "../components/postPreviews/PostPreview";
import { SlideShow } from "../components/SlideShow";

export const HomePage = () => {
  return (
    <div>
      <SlideShow />

      <LiveNews />
      <div className="container py-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-10">
          <div className="layout-content col-span-1 md:col-span-8">
            <div className="grid grid-flow-col grid-rows-3 gap-0">
              <div className="row-span-3">
                <PostPreview size={"full"} />
              </div>
              <div className="col-span-1">
                <PostPreview />
              </div>
              <div className="col-span-1">
                <PostPreview />
              </div>

              <div className="col-span-1 row-span-1">
                <PostPreview />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white p-4">
              <h2 className="text-2xl font-bold">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                mollitia quas perferendis voluptatem ipsa porro error maxime
                iusto, quisquam voluptate cupiditate dolorum totam minima!
                Laboriosam aperiam minus tempora assumenda illo!
              </p>{" "}
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              mollitia quas perferendis voluptatem ipsa porro error maxime
              iusto, quisquam voluptate cupiditate dolorum totam minima!
              Laboriosam aperiam minus tempora assumenda illo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
