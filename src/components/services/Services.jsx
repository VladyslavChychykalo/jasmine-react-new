import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { wemanRoom, manRoom, childRoom } from "../../data/priceContainer";
import StyledSelect from "../shared/styledSelect";

SwiperCore.use([Pagination, Lazy]);

const Services = () => {
  const [currentTab, setCurrentTab] = useState(wemanRoom);
  const [currentSrvice, setCurrentService] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null)

  useEffect(() => {
    setCurrentService(currentTab[0]);
  }, [currentTab]);

  console.log(currentSrvice);

  const carouselSettings = {
    spaceBetween: 20,
    slidesPerView: 1.5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

//   const currentAttrs = currentSrvice && currentSrvice.

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            setCurrentTab(wemanRoom);
          }}
        >
          Женский зал
        </p>
        <p
          onClick={() => {
            setCurrentTab(manRoom);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          Мужской зал
        </p>
      </div>
      <StyledSelect
        currentOption={currentSrvice}
        options={currentTab}
        setCurrentOption={setCurrentService}
      />
      {currentSrvice?.subCategories && (
        <Swiper {...carouselSettings} freeMode>
          {currentSrvice.subCategories.map(({ id, subCategorie }) => {
            return (
              <SwiperSlide key={id}>
                <p>{subCategorie}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {}
    </div>
  );
};

export default Services;
