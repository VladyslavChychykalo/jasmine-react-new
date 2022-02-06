import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { wemanRoom, manRoom, childRoom } from "../../data/priceContainer";
import StyledSelect from "../shared/styledSelect";
import Heading from "../typography/heading";
import Text from "../typography/text";
import { StripIcon, UnderlineIcon } from "../../icons";
import { StyledTD, StyledTD2 } from "./StyledServices";
import styles from "./Test.module.scss";

SwiperCore.use([Pagination, Lazy]);

const Services = () => {
  const [currentTab, setCurrentTab] = useState(wemanRoom);
  const [currentSrvice, setCurrentService] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    setCurrentService(currentTab.attrs[0]);
  }, [currentTab]);

  useEffect(() => {
    setCurrentPrice(currentSrvice?.subCategories[0]);
  }, [currentSrvice]);

  const carouselSettings = {
    spaceBetween: 20,
    // slidesPerView: 1.5,
    slidesPerView: "auto",
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

  return (
    <div
      id="price"
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
        НАШІ ПОСЛУГИ І ЦІНИ
      </Heading>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 22px",
          marginBottom: "47px",
          flexWrap: "wrap",
          rowGap: "30px",
        }}
      >
        <div
          style={{
            position: "relative",
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
            Жіночий зал
          </Text>
          {currentTab.label === "Жіночий зал" && (
            <UnderlineIcon
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "20px",
              }}
            />
          )}
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <Text
            size="ss"
            color="#1B4332"
            transform="uppercase"
            letterSpacing="3"
            onClick={() => {
              setCurrentTab(manRoom);
            }}
          >
            Чоловічий зал
          </Text>
          {currentTab.label === "Чоловічий зал" && (
            <UnderlineIcon
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "20px",
              }}
            />
          )}
        </div>

        <div
          style={{
            position: "relative",
            margin: "0 auto",
          }}
        >
          <Text
            size="ss"
            color="#1B4332"
            transform="uppercase"
            letterSpacing="3"
            onClick={() => {
              setCurrentTab(childRoom);
            }}
          >
            Дитячий зал (до 12 років)
          </Text>
          {currentTab.label === "Дитячий зал (до 12 років)" && (
            <UnderlineIcon
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "20px",
              }}
            />
          )}
        </div>
      </div>
      <StyledSelect
        currentOption={currentSrvice}
        options={currentTab.attrs}
        setCurrentOption={setCurrentService}
        marginBottom="30"
      />
      <div className={styles.wrapper}>
        {!!currentSrvice?.subCategories.filter((el) => el.subCategorie !== "")
          .length && (
          <Swiper {...carouselSettings} freeMode>
            {currentSrvice.subCategories.map((item) => {
              const { id, subCategorie } = item;

              return (
                <SwiperSlide key={id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "max-content",
                    }}
                  >
                    <StripIcon className={styles.stripIconStyles} />
                    <Text
                      size="s"
                      letterSpacing="2"
                      color="#1B4332"
                      onClick={() => {
                        setCurrentPrice(item);
                      }}
                      whiteSpace="nowrap"
                    >
                      {subCategorie}
                    </Text>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      {newEl.length && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#fff",
            paddingBottom: "25px",
            paddingTop: "20px",
          }}
        >
          <Swiper {...carouselSettingsPrice}>
            {newEl.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <table style={{ width: "100%" }}>
                    {item.map(({ name, price, label }) => {
                      return (
                        <tr
                          style={{
                            lineHeight: "20px",
                          }}
                        >
                          <StyledTD2>
                            <Text
                              color="#1B4332"
                              size="s"
                              weight={label ? "semibold" : "normal"}
                            >
                              {name.slice(0, 1).toUpperCase() + name.slice(1)}
                            </Text>
                          </StyledTD2>

                          <StyledTD>
                            <Text
                              color="#1B4332"
                              size="s"
                              weight={label ? "semibold" : "normal"}
                            >
                              {price}
                            </Text>
                          </StyledTD>
                        </tr>
                      );
                    })}
                  </table>
                </SwiperSlide>
              );
            })}
            {/* {newEl.length !== 1 && <div className="swiper-pagination" />} */}
            <div
              style={{
                visibility:
                  !newEl.length || newEl.length === 1 ? "hidden" : "visible",
                marginTop: (!newEl.length || newEl.length === 1) && "0px",
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
