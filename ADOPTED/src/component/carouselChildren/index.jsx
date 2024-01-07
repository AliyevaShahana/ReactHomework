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
import { users } from "../../data";
import Card from "../card";
import "./index.scss"
const ChildrenCarousel = () => {
  return (
    <div id="cards">
      {" "}
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={3}
        navigation
        // loop="true"
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
      
        {users.map((user) => (
          <SwiperSlide>
         
            <Card user={user} />
          </SwiperSlide>
        ))}
          

      </Swiper>
    </div>
  );
};

export default ChildrenCarousel;
