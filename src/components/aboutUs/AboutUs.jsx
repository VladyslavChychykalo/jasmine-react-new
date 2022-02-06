import React from "react";
import Heading from "../typography/heading";
import Text from "../typography/text";
import image from "../../assets/images/aboutUs/aboutUs1.png";

const AboutUs = () => {
  return (
    <div id="main" style={{ padding: "75px 25px 0px 25px" }}>
      <Heading
        transform="uppercase"
        size="l"
        as="h4"
        letterSpacing="5"
        color="#1B4332"
        weight="bold"
      >
        Про нас
      </Heading>
      <Text
        margin="23px 0 0 0"
        color="#1B4332"
        letterSpacing="2"
        lineHeight="20"
      >
        Вже як 10 років ми знайшли в нашому салоні формулу краси.
      </Text>
      <Text
        margin="10px 0 0 0"
        letterSpacing="2"
        color="#1B4332"
        lineHeight="20"
      >
        ЖАСМІН - твій порятунок перед важливою зустріччю, довгоочікуваним
        побаченням або насиченим вікендом.
      </Text>
      <Text
        margin="14px 0 0 0"
        letterSpacing="2"
        color="#1B4332"
        lineHeight="20"
      >
        Місце, з чистими кистями, одноразовими матеріалами та професійними
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
