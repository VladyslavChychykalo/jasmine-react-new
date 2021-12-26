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
          <Heading as="h4" letterSpacing="3" color="#fff">
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
          <div>
            <Text textWeights="light" size="xl" color="#fff">
              Красота в стиле
            </Text>
            <Heading textWeights="bold" size="xxl" color="#fff">
              Жасмин
            </Heading>
            <Text textWeights="normal" color="#fff">
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
              }}
            >
              <a>Главная</a>
              <a>Галерея</a>
              <a>Прайс</a>
              <a>Сертификаты</a>
              <a>Контакты</a>
            </nav>
            <div style={{ marginRight: "auto" }}>UA</div>
          </div>
        )}
      </StyledContainer>
    </>
  );
};

export default MobileMenu;
