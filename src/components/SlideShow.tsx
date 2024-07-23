import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlideShow = () => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div className="slide-container">
          <div className="slide-image">
            <img
              src="https://cdn2.unrealengine.com/a-beginner-s-guide-to-league-of-legends-teemo-1215x717-dc27844d5953.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="container h-full">
            <div className="slide-content flex h-full items-center justify-center">
              <div>
                <h1 className="text-4xl font-bold uppercase text-white">
                  Last Night The Wolves bEAT tHE rHINOS
                </h1>
                <p className="post-preview-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet doloremque officiis ipsum voluptatem facere
                  perspiciatis voluptates, nam omnis eos mollitia tenetur saepe
                  quaerat facilis, voluptatibus quae sequi molestiae. Iure,
                  modi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
