import React from "react";
import MobileMenu from "../../components/mobileMenu";
import Gallery from "../../components/gallery";
import Team from "../../components/team";
import Services from "../../components/services";
import AboutUs from "../../components/aboutUs";
import Certificates from "../../components/certificates";
import Contacts from "../../components/contacts";

const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <MobileMenu />
      <AboutUs />
      <Gallery />
      <Team />
      <Services />
      <Certificates />
      <Contacts />
    </div>
  );
};

export default HomePage;
