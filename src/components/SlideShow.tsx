import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "./ui/Button";
import { useNews } from "../hooks/useNews";
import { SlideShowLoader } from "./ui/SlideShowLoader";
import useNewsStore from "../stores/news.store";
import { useEffect } from "react";

export const SlideShow = () => {
  const { queryArticles } = useNews({
    query: "playstation",
    pageSize: 5,
    sortBy: "publishedAt",
  });

  const setArticles = useNewsStore((state) => state.setArticles);
  const news = useNewsStore((state) => state.news);

  const { isLoading, data, isError } = queryArticles;

  useEffect(() => {
    if (data?.articles) {
      setArticles(data.articles);
      console.log("news changed");
    }
  }, [data?.articles, setArticles]);

  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /*   autoplay: true, */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading || isError) {
    return <SlideShowLoader />;
  }

  return (
    <div className="slideshow-container">
      {news.length > 0 ? (
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
                    <h1 className="post-preview-title text-xl font-bold uppercase text-white md:text-4xl">
                      {slide.title.slice(0, 90)}...
                    </h1>
                    <p className="post-preview-text">{slide.description}</p>

                    <div className="mt-10">
                      <Button
                        size="big"
                        bg="bg-purple-100"
                        color="text-white"
                        to={slide.url}
                      >
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <SlideShowLoader />
      )}
    </div>
  );
};
