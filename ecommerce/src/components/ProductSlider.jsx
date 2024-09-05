import PropTypes from 'prop-types'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import ProductCard from './ProductCard';
import productsCatalog from '../lib/dummyProduct/productsCatalog';

// Custom next arrow component
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowRoundForward
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
        color: '#fff',
        borderRadius: '50%',
        padding: '10px',
        width: '45px',
        height: '45px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    />
  );
}

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

// Custom previous arrow component
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowRoundBack
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'linear-gradient(45deg, #43cea2, #185a9d)',
        color: '#fff',
        borderRadius: '50%',
        padding: '10px',
        width: '45px',
        height: '45px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    />
  );
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-16">
      <div className="flex justify-between items-center mb-8 px-6">
        <h1 className="text-xl sm:text-3xl font-semibold text-gray-900">
          Trending Products
        </h1>
        <button className="text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full hover:opacity-90">
          View More
        </button>
      </div>

      <div className="slider-container w-[85vw] mx-auto sm:w-[90vw]">
        <Slider {...settings}>
          {productsCatalog.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductSlider;
