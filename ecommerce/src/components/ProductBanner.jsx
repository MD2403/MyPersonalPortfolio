import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/images/slide1.webp";
import slide2 from "../assets/images/slide2.webp";
import slide3 from "../assets/images/slide3.webp";
import slide4 from "../assets/images/slide4.webp";

export function ProductBanner() {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="mt-5 shadow-lg">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" className="w-full h-[400px] object-cover" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" className="w-full h-[400px] object-cover" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" className="w-full h-[400px] object-cover" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" className="w-full h-[400px] object-cover" />
        </div>
      </Slider>
    </div>
  );
}
