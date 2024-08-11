import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Foods from "./components/Carousel";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <About/>
        <Carousel/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
