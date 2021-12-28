import React, { useState } from "react";
import {
  StyledContainer,
  TestStyled,
  StyledNav,
  GlobalStyle,
} from "./StyledMobileMenu";
import { MenuIcon, CrossIcon } from "../../icons";
import Heading from "../typography/heading";
import Text from "../typography/text";

const MobileMenu = () => {
  const [isMenu, setMenuStatus] = useState(false);
  const IconMenu = isMenu ? CrossIcon : MenuIcon;

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
          <Heading size="l" as="h4" letterSpacing="3" color="#fff">
            Жасмин
          </Heading>
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
              Красота в стиле
            </Text>
            <Heading
              letterSpacing="17"
              textWeights="bold"
              size="xxl"
              color="#fff"
              transform="uppercase"
              margin="18px 0 0 0"
            >
              Жасмин
            </Heading>
            <Text
              letterSpacing="2.9"
              lineHeight="19"
              margin="32px 0 0 0"
              textWeights="normal"
              color="#fff"
            >
              Все види косметологических услуг, маникюр и педикюр, окрашивание
              волос, парикмахерские услуги.
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
                gap: "38px",
                letterSpacing: "4px",
              }}
            >
              <a style={{ color: "#fff", fontSize: "18px" }}>Главная</a>
              <a style={{ color: "#fff", fontSize: "18px" }}>Галерея</a>
              <a style={{ color: "#fff", fontSize: "18px" }}>Прайс</a>
              <a style={{ color: "#fff", fontSize: "18px" }}>Сертификаты</a>
              <a style={{ color: "#fff", fontSize: "18px" }}>Контакты</a>
            </nav>
            <div
              style={{
                marginRight: "auto",
                marginTop: "92px",
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
