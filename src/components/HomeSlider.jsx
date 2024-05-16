import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

const HomeSlider = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="relative">
        <img className="w-full" src={slide1} alt="" />
        <p className="absolute bottom-0 md:bottom-4 left-0 right-0 flex justify-center uppercase text-white text-[14px] md:text-xl">
          Salads
        </p>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full" src={slide2} alt="" />
        <p className="absolute bottom-0 md:bottom-4 left-0 right-0 flex justify-center uppercase text-white text-[14px] md:text-xl">
        Soups
        </p>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full" src={slide3} alt="" />
        <p className="absolute bottom-0 md:bottom-4 left-0 right-0 flex justify-center uppercase text-white text-[14px] md:text-xl">
        pizzas
        </p>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full" src={slide4} alt="" />
        <p className="absolute bottom-0 md:bottom-4 left-0 right-0 flex justify-center uppercase text-white text-[14px] md:text-xl">
        desserts
        </p>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full" src={slide5} alt="" />
        <p className="absolute bottom-0 md:bottom-4 left-0 right-0 flex justify-center uppercase text-white text-[14px] md:text-xl">
          Salads
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
