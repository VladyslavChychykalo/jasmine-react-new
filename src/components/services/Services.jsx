import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { wemanRoom, manRoom, childRoom } from "../../data/priceContainer";
import StyledSelect from "../shared/styledSelect";
import Heading from "../typography/heading";
import Text from "../typography/text";

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
    <div
      style={{
        padding: "53px 25px",
        backgroundColor: "#EFE8E1",
      }}
    >
      <Heading
        size="l"
        letterSpacing="5"
        transform="uppercase"
        margin="0 0 36px 0"
        weight="bold"
        color="#1B4332"
      >
        Наши услуги и цены
      </Heading>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 22px",
          marginBottom: "47px",
        }}
      >
        <Text
          size="ss"
          color="#1B4332"
          transform="uppercase"
          letterSpacing="3"
          onClick={() => {
            setCurrentTab(wemanRoom);
          }}
        >
          Женский зал
        </Text>
        <Text
          size="ss"
          color="#1B4332"
          transform="uppercase"
          letterSpacing="3"
          onClick={() => {
            setCurrentTab(manRoom);
          }}
        >
          Мужской зал
        </Text>
      </div>
      <StyledSelect
        currentOption={currentSrvice}
        options={currentTab}
        setCurrentOption={setCurrentService}
        marginBottom="30"
      />
      {currentSrvice?.subCategories && (
        <Swiper {...carouselSettings} freeMode>
          {currentSrvice.subCategories.map((item) => {
            const { id, subCategorie } = item;

            return (
              <SwiperSlide key={id}>
                <Text
                  size="s"
                  letterSpacing="2"
                  color="#1B4332"
                  onClick={() => {
                    setCurrentPrice(item);
                  }}
                >
                  {subCategorie}
                </Text>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {newEl.length && (
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Swiper {...carouselSettingsPrice}>
            {newEl.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      backgroundColor: "#fff",
                    }}
                  >
                    {item.map(({ name, price, id }) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0 20px",
                          }}
                          key={id}
                        >
                          <Text color="#1B4332" size="s">
                            {name.slice(0, 1).toUpperCase() + name.slice(1)}
                          </Text>
                          <Text color="#1B4332" size="s">
                            {price}
                          </Text>
                        </div>
                      );
                    })}
                  </div>
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
        </div>
      )}
    </div>
  );
};

export default Services;
