import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Testimonials = () => {
  const { Testimonials } = content;
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title">{Testimonials.title}</h2>
        <h2 className="subtitle">{Testimonials.subtitle}</h2>
        <br />
        jhdjkhdkjh
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          modules={[Pagination]}
        >
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
