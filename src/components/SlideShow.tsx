import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "./ui/Button";
import { useNews } from "../hooks/useNews";
import { SlideShowLoader } from "./ui/SlideShowLoader";

export const SlideShow = () => {
  const { isLoading, news } = useNews({ query: "videogames", pageSize: 5 });

  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /*   autoplay: true, */
  };

  if (isLoading) {
    return <SlideShowLoader />;
  }

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {news?.map((slide) => (
          <div className="slide-container" key={slide.title}>
            <div className="slide-image">
              <img
                src={slide.image || ""}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="container h-full max-w-screen-xl px-10">
              <div className="slide-content flex h-full items-center justify-center">
                <div>
                  <h1 className="post-preview-title text-4xl font-bold uppercase text-white">
                    {slide.title.slice(0, 90)}...
                  </h1>
                  <p className="post-preview-text">{slide.description}</p>

                  <div className="mt-10">
                    <Button size="big" bg="bg-purple-100" color="text-white">
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
