import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
// import "swiper/css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import slider_img from "/public/assets/Home/img.png";
function HomeSlider() {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <div className="home_slider_div">
      <Swiper
        autoplay={{ delay: 1000 }}
        loop={true}
        slidesPerView={1}
        speed={3000}
      >
        <SwiperSlide>
          <div className="slider_item">
            <img src={slider_img} alt="" />
            <h1>Доставка бесплатно от 1000 ₽</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_item">
            <img src={slider_img} alt="" />
            <h1>Доставка бесплатно от 2000 ₽</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_item">
            <img src={slider_img} alt="" />
            <h1>Доставка бесплатно от 3000 ₽</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_item">
            <img src={slider_img} alt="" />
            <h1>Доставка бесплатно от 4000 ₽</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSlider;
