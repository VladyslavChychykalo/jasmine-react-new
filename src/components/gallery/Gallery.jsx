import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import galleryImages from "../../data/galleryImages";
import { GlobalStyle, StyledContainer } from "./StyledGallery";

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
    <div className="rootJopa" style={{ position: "relative" }}>
      {/* <GlobalStyle /> */}
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
