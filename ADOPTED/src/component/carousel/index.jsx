import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import bg1 from "../../../public/slider-1.jpg";
import bg2 from "../../../public/slider-2.jpg";
import PrimaryBtn from "../button";
import "./index.scss";
const CarouselComp = () => {
  return (
    <div id="carousel">
      <Swiper
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        loop="true"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="first">

          <div className="container">
            <h4>Celine Richardson, 14 yrs. old</h4>
            <h1>Needs a Caring Parents</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Commodi
              unde impedit, necessitatibus, soluta sit quam <br /> minima expedita
              atque corrupti reiciendis.
            </p>
            <PrimaryBtn text={"Adopt Her Now!"} bgColor={"bgFullRed"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="second">
          <div className="container">
            <h4>Celine Richardson, 13 yrs. old</h4>
            <h1>Needs a Caring Parents</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              unde impedit, necessitatibus, soluta sit quam minima expedita
              atque corrupti reiciendis.
            </p>
            <PrimaryBtn text={"Adopt Her Now!"} bgColor={"bgFullRed"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselComp;
