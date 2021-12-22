import React, { useState } from "react";
import { StyledContainer, TestStyled } from "./StyledMobileMenu";
import { MenuIcon, CrossIcon } from "../../icons";

const MobileMenu = () => {
  const [isMenu, setMenuStatus] = useState(false);
  const IconMenu = isMenu ? CrossIcon : MenuIcon;
  
  return (
    <>
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
          <p>Жасмин</p>
          <IconMenu onClick={() => setMenuStatus((prev) => !prev)} />
        </div>
        {!isMenu ? (
          <div>test1</div>
        ) : (
          <div
            style={{
              position: "absolute",
              backgroundColor: "blue",
              height: "calc(100% - 82px)",
              left: "0",
              right: "0",
              bottom: "0",
              overflow: "hidden",
            }}
          >
            <nav>
              {/* <a></a>
              <a></a>
              <a></a>
              <a></a>
              <a></a> */}
            </nav>
          </div>
        )}
      </StyledContainer>
    </>
  );
};

export default MobileMenu;
