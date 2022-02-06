import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import galleryImages from "../../data/galleryImages";
import { GlobalStyle, StyledContainer } from "./StyledGallery";
import Heading from "../typography/heading";
import Text from "../typography/text";
import { InstagramIcon } from "../../icons";

SwiperCore.use([Pagination, Lazy]);

const Gallery = () => {
  const carouselSettings = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div
      id="gallery"
      style={{
        position: "relative",
        backgroundColor: "#EFE8E1",
        marginTop: "72px",
        padding: "52px 25px",
      }}
    >
      <Heading
        letterSpacing="5"
        size="l"
        weight="bold"
        color="#1B4332"
        transform="uppercase"
      >
        Наші роботи
      </Heading>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "15px",
          marginBottom: "18px",
        }}
      >
        <Text
          margin="0px 15px 0px 0px"
          color="#1B4332"
          letterSpacing="3"
          lineHeight="20"
        >
          Більше робіт дивіться у нашому INSTAGRAM
        </Text>
        <a href="https://www.instagram.com/salonejasmine/?igshid=bmqpq878ep0q">
          <InstagramIcon width="36" height="36" />
        </a>
      </div>
      <Swiper {...carouselSettings}>
        {galleryImages.map(({ src, alt, id }) => {
          return (
            <SwiperSlide key={`mobile_thumb${id}`}>
              <img src={src} alt={alt} />
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default Gallery;
