import React from "react";
import Heading from "../typography/heading";
import Text from "../typography/text";
import {
  MarkerIcon,
  PhoneIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  ViberIcon,
  TelegramIcon,
} from "../../icons";

const Contacts = () => {
  return (
    <div
      style={{
        backgroundColor: "#EFE8E1",
        padding: "52px 25px",
      }}
    >
      <Heading
        transform="uppercase"
        size="l"
        as="h4"
        letterSpacing="5"
        color="#1B4332"
        weight="bold"
      >
        Наши контакты
      </Heading>
      <ul
        style={{
          listStyle: "none",
          marginTop: "26px",
          marginBottom: "36px",
        }}
      >
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <MarkerIcon />
          <Text
            lineHeight="20"
            margin="0 0 0 20px"
            letterSpacing="3"
            size="m"
            color="#1B4332"
          >
            Соломенский район, ул. Гарматная 45
          </Text>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "22px",
          }}
        >
          <PhoneIcon />
          <Text
            lineHeight="20"
            margin="0 0 0 20px"
            letterSpacing="3"
            size="m"
            color="#1B4332"
          >
            (093) 739-00-44
            <br />
            (096) 811-84-56
          </Text>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ClockIcon />
          <Text margin="0 0 0 20px" letterSpacing="3" size="m" color="#1B4332">
            Пн-Вс: 10:00-20:00
          </Text>
        </li>
      </ul>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li>
          <a href="">
            <InstagramIcon width="32" height="32" />
          </a>
        </li>
        <li>
          <a href="">
            <TelegramIcon />
          </a>
        </li>
        <li>
          <a href="">
            <ViberIcon />
          </a>
        </li>
        <li>
          <a href="">
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
