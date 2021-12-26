import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { wemanRoom, manRoom, childRoom } from "../../data/priceContainer";
import StyledSelect from "../shared/styledSelect";

SwiperCore.use([Pagination, Lazy]);

const Services = () => {
  const [currentTab, setCurrentTab] = useState(wemanRoom);
  const [currentSrvice, setCurrentService] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    setCurrentService(currentTab[0]);
  }, [currentTab]);

  useEffect(() => {
    setCurrentPrice(currentSrvice?.subCategories[0]);
  }, [currentSrvice]);

  console.log(currentPrice);

  const carouselSettings = {
    spaceBetween: 20,
    slidesPerView: 1.5,
  };

  const carouselSettingsPrice = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const elL = Math.ceil(currentPrice?.services.attributes.length / 7);
  const newEl = [];

  for (let i = 0; i < elL; i++) {
    const el = currentPrice?.services.attributes.slice(i * 7, i * 7 + 7);
    newEl.push(el);
  }

  console.log(newEl);

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
          {currentSrvice.subCategories.map((item) => {
            const { id, subCategorie } = item;

            return (
              <SwiperSlide key={id}>
                <p
                  onClick={() => {
                    setCurrentPrice(item);
                  }}
                >
                  {subCategorie}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {newEl.length && (
        <Swiper {...carouselSettingsPrice}>
          {newEl.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {item.map(({ name, price, id }) => {
                  return (
                    <div key={id}>
                      <p>{name}</p>
                      <p>{price}</p>
                    </div>
                  );
                })}
              </SwiperSlide>
            );
          })}
          <div
            style={{
              visibility:
                !newEl.length || newEl.length === 1 ? "hidden" : "visible",
            }}
            className="swiper-pagination"
          />
        </Swiper>
      )}
    </div>
  );
};

export default Services;
