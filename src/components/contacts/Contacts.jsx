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
        marginBottom: "215px",
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
      {/* <div>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.027626170004!2d30.43088551554299!3d50.44058607947398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc199da3ea95%3A0x29e3b72d9d1dcd8!2sHarmatna%20St%2C%2045%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2s!4v1641816229761!5m2!1sen!2s"
          width="100%"
          height="187"
          frameBorder="0"
          style={{ border: 0, marginTop: "20px" }}
          allowfullscreen=""
          ariaHidden="false"
          loading="lazy"
          tabIndex="0"
        />
      </div> */}
    </div>
  );
};

export default Contacts;
