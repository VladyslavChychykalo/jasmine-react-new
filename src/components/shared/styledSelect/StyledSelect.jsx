import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ArrowIcon } from "../../../icons";

const CustomSelect = styled.div`
  height: 50px;
  border: 1px solid #1b4332;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 21px 0 24px;
  cursor: pointer;
  background-color: #fff;
`;

const CustomOptionsContainer = styled.ul`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid #1b4332;
  border-top: 0px;
`;

const CustomOptions = styled.li`
  background-color: ${({ isActive }) => (isActive ? "#efe8e1" : "#ffffff")};
  border-bottom: 1px solid #1b4332;
  height: 50px;
  padding: 0 21px 0 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #efe8e1;
  }
  &:last-child {
    border-bottom: 0px;
  }
`;

const StyledSelect = ({ currentOption, options, setCurrentOption }) => {
  const [isSelected, setSelect] = useState(false);

  const selectRef = useRef(null);
  const optionsContainerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    setTimeout(() => {
      if (
        !selectRef.current?.contains(e.target) &&
        !optionsContainerRef.current?.contains(e.target)
      ) {
        setSelect(false);
      }
    }, 0);
  };

  const handleChangeOption = (newOption) => {
    setCurrentOption(newOption);
    setSelect(false);
  };

  return (
    <div>
      <CustomSelect ref={selectRef} onClick={() => setSelect((prev) => !prev)}>
        {currentOption?.selectName}
        <ArrowIcon isSelected={isSelected} />
      </CustomSelect>
      {isSelected && (
        <CustomOptionsContainer ref={optionsContainerRef}>
          {options.map((option) => (
            <CustomOptions
              isActive={currentOption?.id === option.id}
              key={option.id}
              onClick={() => handleChangeOption(option)}
            >
              {option.selectName}
            </CustomOptions>
          ))}
        </CustomOptionsContainer>
      )}
    </div>
  );
};

export default StyledSelect;
