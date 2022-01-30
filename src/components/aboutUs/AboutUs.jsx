import React from "react";
import Heading from "../typography/heading";
import Text from "../typography/text";
import image from "../../assets/images/aboutUs/aboutUs1.png";

const AboutUs = () => {
  return (
    <div style={{ marginTop: "75px", padding: "0px 25px" }}>
      <Heading
        transform="uppercase"
        size="l"
        as="h4"
        letterSpacing="5"
        color="#1B4332"
        weight="bold"
      >
        О нас
      </Heading>
      <Text
        margin="23px 0 0 0"
        color="#1B4332"
        letterSpacing="2"
        lineHeight="20"
      >
        Уже как 10 лет мы в нашем салоне нашли формулу красоты.
      </Text>
      <Text
        margin="10px 0 0 0"
        letterSpacing="2"
        color="#1B4332"
        lineHeight="20"
      >
        ЖАСМИН - твоё спасение перед важной встречей, долгожданным свиданием или
        насыщенным уик-эндом.
      </Text>
      <Text
        margin="14px 0 0 0"
        letterSpacing="2"
        color="#1B4332"
        lineHeight="20"
      >
        Место, с чистыми кистями, одноразовыми материалами и профессиональными
        руками.
      </Text>
      <img
        style={{ marginTop: "16px", width: "100%" }}
        src={image}
        alt="About Us"
      />
    </div>
  );
};

export default AboutUs;
