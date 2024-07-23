import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "./ui/Button";

export const SlideShow = () => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /*   autoplay: true, */
  };

  const slides = [
    {
      id: 1,
      image:
        "https://cdn2.unrealengine.com/a-beginner-s-guide-to-league-of-legends-teemo-1215x717-dc27844d5953.jpg",
      title: "Last Night The Wolves Beat tHE rHINOS",
      text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet doloremque officiis ipsum voluptatem facere
                  perspiciatis voluptates, nam omnis eos mollitia tenetur saepe
                  quaerat facilis, voluptatibus quae sequi molestiae. Iure,
                  modi.`,
      button: "  Go to Article",
    },

    {
      id: 2,
      image:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Video-Game-Masterpieces.jpg",
      title: "Last Night The Wolves Beat tHE rHINOS",
      text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet doloremque officiis ipsum voluptatem facere
                  perspiciatis voluptates, nam omnis eos mollitia tenetur saepe
                  quaerat facilis, voluptatibus quae sequi molestiae. Iure,
                  modi.`,
      button: "  Go to Article",
    },

    {
      id: 3,
      image:
        "https://cdn2.unrealengine.com/a-beginner-s-guide-to-league-of-legends-teemo-1215x717-dc27844d5953.jpg",
      title: "Last Night The Wolves Beat tHE rHINOS",
      text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet doloremque officiis ipsum voluptatem facere
                  perspiciatis voluptates, nam omnis eos mollitia tenetur saepe
                  quaerat facilis, voluptatibus quae sequi molestiae. Iure,
                  modi.`,
      button: "  Go to Article",
    },

    {
      id: 4,
      image:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Video-Game-Masterpieces.jpg",
      title: "Last Night The Wolves Beat tHE rHINOS",
      text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet doloremque officiis ipsum voluptatem facere
                  perspiciatis voluptates, nam omnis eos mollitia tenetur saepe
                  quaerat facilis, voluptatibus quae sequi molestiae. Iure,
                  modi.`,
      button: "  Go to Article",
    },
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className="slide-container" key={slide.id}>
            <div className="slide-image">
              <img src={slide.image} className="h-full w-full object-cover" />
            </div>
            <div className="container h-full max-w-screen-xl px-10">
              <div className="slide-content flex h-full items-center justify-center">
                <div>
                  <h1 className="post-preview-title text-4xl font-bold uppercase text-white">
                    {slide.title}
                  </h1>
                  <p className="post-preview-text">{slide.text}</p>

                  <div className="mt-10">
                    <Button size="big" bg="bg-purple-100" color="text-white">
                      {slide.button}
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
