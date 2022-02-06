import React, { useState } from "react";
import {
  StyledContainer,
  TestStyled,
  StyledNav,
  GlobalStyle,
} from "./StyledMobileMenu";
import { MenuIcon, CrossIcon, LongStripIcon } from "../../icons";
import Heading from "../typography/heading";
import Text from "../typography/text";

const MobileMenu = () => {
  const [isMenu, setMenuStatus] = useState(false);
  const IconMenu = isMenu ? CrossIcon : MenuIcon;

  const navigationOptions = [
    {
      id: 1,
      title: "Головна",
      linkPage: "#main",
    },
    {
      id: 2,
      title: "Галерея",
      linkPage: "#gallery",
    },
    {
      id: 3,
      title: "Команда",
      linkPage: "#team",
    },
    {
      id: 4,
      title: "Ціни",
      linkPage: "#price",
    },
    {
      id: 5,
      title: "Сертифікати",
      linkPage: "#certificates",
    },
    {
      id: 6,
      title: "Контакти",
      linkPage: "#contacts",
    },
  ];

  return (
    <>
      {isMenu && <GlobalStyle />}
      {isMenu && <TestStyled />}
      <StyledContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "25px",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <Heading size="l" as="h4" letterSpacing="3" color="#fff">
              Жасмін
            </Heading>
            <LongStripIcon
              style={{
                position: "absolute",
                bottom: "3px",
                right: "-25px",
              }}
            />
          </div>

          <IconMenu
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuStatus((prev) => !prev);
            }}
          />
        </div>
        {!isMenu ? (
          <div style={{ marginTop: "110px" }}>
            <Text letterSpacing="4" textWeights="light" size="xl" color="#fff">
              Краса у стилі
            </Text>
            <Heading
              letterSpacing="17"
              textWeights="bold"
              size="xxl"
              color="#fff"
              transform="uppercase"
              margin="18px 0 0 0"
              whiteSpace="nowrap"
            >
              Жасмін
            </Heading>
            <Text
              letterSpacing="2.9"
              lineHeight="19"
              margin="32px 0 0 0"
              textWeights="normal"
              color="#fff"
            >
              Усі види косметологічних послуг, манікюр та педикюр, фарбування
              волосся, перукарські послуги.
            </Text>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              backgroundColor: "#d6b095",
              height: "calc(100% - 82px)",
              left: "0",
              right: "0",
              bottom: "0",
              overflow: "hidden",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
                alignItems: "center",
                marginTop: "72px",
                gap: "32px",
                letterSpacing: "4px",
              }}
            >
              {navigationOptions.map(({ id, title, linkPage }) => {
                return (
                  <a
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "22px",
                      color: "#fff",
                      fontFamily: "Lato",
                      textDecoration: "none",
                    }}
                    onClick={() => {
                      setMenuStatus(false);
                    }}
                    key={id}
                    href={linkPage}
                  >
                    {title}
                  </a>
                );
              })}
            </nav>
            <div
              style={{
                marginRight: "auto",
                marginTop: "32px",
                marginLeft: "24px",
                color: "#fff",
                border: "1px solid #fff",
                width: "48px",
                height: "48px",
                fontSize: "12px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              UA
            </div>
          </div>
        )}
      </StyledContainer>
    </>
  );
};

export default MobileMenu;
