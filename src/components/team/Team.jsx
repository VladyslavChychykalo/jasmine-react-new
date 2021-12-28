import React, { useState } from "react";
import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import StyledSelect from "../shared/styledSelect";
import galleryTeam from "../../data/galleryTeam";
import Heading from "../typography/heading";
import Text from "../typography/text";

SwiperCore.use([Pagination, Lazy]);

const Team = () => {
  const [currentOption, setCurrentOption] = useState(galleryTeam[0]);

  const carouselSettings = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div style={{ position: "relative", padding: "51px 25px" }}>
      {/* <GlobalStyle /> */}
      <Heading
        size="l"
        letterSpacing="4"
        transform="uppercase"
        margin="0 0 20px 0"
        weight="bold"
        color="#1B4332"
      >
        Мастера
      </Heading>
      <StyledSelect
        currentOption={currentOption}
        options={galleryTeam}
        setCurrentOption={setCurrentOption}
        marginBottom="24"
      />
      <Swiper {...carouselSettings}>
        {currentOption.team.map(
          ({ src, alt, id, name, profession, experience }) => {
            return (
              <SwiperSlide key={`mobile_thumb${id}`}>
                <img src={src} alt={alt} />
                <div
                  style={{
                    marginTop: "26px",
                    borderLeft: "1px solid #1B4332",
                    paddingLeft: "18px",
                  }}
                >
                  <Text color="#1B4332" letterSpacing="4" size="m">
                    {name}
                  </Text>
                  <Text
                    color="#1B4332"
                    letterSpacing="2"
                    margin="12px 0 0 0"
                    size="ss"
                  >
                    {profession}
                  </Text>
                  <Text
                    color="#1B4332"
                    letterSpacing="2"
                    margin="5px 0 0 0"
                    size="ss"
                  >
                    Опыт работы {experience} лет
                  </Text>
                </div>
              </SwiperSlide>
            );
          }
        )}
        <div
          style={{
            visibility:
              !currentOption?.team.length || currentOption.team.length === 1
                ? "hidden"
                : "visible",
          }}
          className="swiper-pagination"
        />
      </Swiper>
    </div>
  );
};

export default Team;
