import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Box } from "@chakra-ui/react";

type propsType = {
  info: Array<{
    path: string;
    url: string;
  }>;
};

const Slider = (props: propsType) => {
  const info = props.info;
  return (
    <Box
      w={{ base: "100vw", md: "40vw" }}
      margin={{ base: "0 0", md: "0 auto" }}
    >
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        style={{ width: "100%" }}
      >
        {info.map((item, index) => {
          return (
            <SwiperSlide style={{ border: "solid 2px #3AC9D2" }} key={index}>
              <a
                href={`https://github.com/${item.url}`}
                style={{
                  display: "flex",
                }}
              >
                <img
                  src={`/tumb/${item.path}`}
                  style={{
                    height: "560px",
                    width: "1280px",
                    objectFit: "contain",
                  }}
                  alt={item.path}
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Slider;
