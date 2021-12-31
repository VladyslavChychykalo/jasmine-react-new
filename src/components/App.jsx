import React from "react";
import MobileMenu from "./mobileMenu";
import Gallery from "./gallery";
import Team from "./team";
import Services from "./services";
import AboutUs from "./aboutUs";
import Certificates from "./certificates";

const App = () => {
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
    </div>
  );
};

export default App;
