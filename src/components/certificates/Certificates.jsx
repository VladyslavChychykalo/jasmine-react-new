import React from "react";
import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../typography/heading";
import Text from "../typography/text";
import certificateImages from "../../data/certificateImages";

SwiperCore.use([Pagination, Lazy]);

const Certificates = () => {
  const carouselSettings = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div style={{ padding: "76px 25px" }}>
      <Heading
        transform="uppercase"
        size="l"
        as="h4"
        letterSpacing="4"
        color="#1B4332"
        weight="bold"
        lineHeight="24"
        // margin="17px 0 0 0"
      >
        Подарочные сертификаты
      </Heading>
      <Text
        margin="17px 0 0 0"
        color="#1B4332"
        letterSpacing="2"
        lineHeight="20"
      >
        Подарочный сертификат салона красоты Жасмин – это лучший подарок. Вы
        можете приобрести сертификат на любую сумму или выбрать необходимую
      </Text>
      <Text
        margin="29px 0 0 0"
        letterSpacing="2"
        color="#1B4332"
        lineHeight="20"
      >
        Сертификатом можно воспользоваться в любое время – главное, запишитесь
        заранее к нужному мастеру.
      </Text>
      <Text
        margin="21px 0 0 0"
        letterSpacing="2"
        color="#1B4332"
        lineHeight="20"
      >
        Вы дарите не очередной банальный подарок – Вы дарите заботу, внимание и
        положительные эмоции.
      </Text>

      <div style={{ marginTop: "22px" }}>
        <Swiper {...carouselSettings}>
          {certificateImages.map(({ src, alt, id }) => {
            return (
              <SwiperSlide key={`mobile_thumb${id}`}>
                <img src={src} alt={alt} />
              </SwiperSlide>
            );
          })}
          {(!certificateImages.length || certificateImages.length !== 1) && (
            <div className="swiper-pagination" style={{ marginTop: "25px" }} />
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Certificates;
