import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { ServiceData } from "../utils/products";
import SlideService from "./SliderCard/SlideService";

const Sliderservice = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="homeSlide">
      <Container>
        <Slider {...settings}>
          {ServiceData.map((value, index) => {
            return (
              <SlideService
                key={index}
                title={value.title}
                cover={value.cover}
                desc={value.desc}
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default Sliderservice;
