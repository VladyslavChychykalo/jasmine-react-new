import React from "react";
import MobileMenu from "./mobileMenu";
import Gallery from "./gallery";
import Team from './team'
import Services from "./services";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <MobileMenu />
      <Gallery />
      <Team />
      <Services />
    </div>
  );
};

export default App;
