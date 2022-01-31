import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Started from "./Started";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Started />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
