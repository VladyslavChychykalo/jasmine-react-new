import React, { useState } from "react";
import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { GlobalStyle } from "./StyledTeam";
import StyledSelect from "../shared/styledSelect";
import galleryTeam from "../../data/galleryTeam";

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
    <div style={{ position: "relative" }}>
      {/* <GlobalStyle /> */}
      <StyledSelect
        currentOption={currentOption}
        options={galleryTeam}
        setCurrentOption={setCurrentOption}
      />
      <Swiper {...carouselSettings}>
        {currentOption.team.map(
          ({ src, alt, id, name, profession, experience }) => {
            return (
              <SwiperSlide key={`mobile_thumb${id}`}>
                <img src={src} alt={alt} />
                <div>
                  <p>{name}</p>
                  <p>{profession}</p>
                  <p>Опыт работы {experience}</p>
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
