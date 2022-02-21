import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

type propsType = {
  info: Array<{
    path: string;
    url: string;
  }>;
};

const Slider = (props: propsType) => {
  const info = props.info;
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView={3}
      spaceBetween={5}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {info.map((item) => {
        return (
          <SwiperSlide>
            <a href={`https://github.com/${item.url}`}>
              <Image src={`/tumb/${item.path}`} height={150} width={340} />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
