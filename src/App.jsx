import React, { useEffect, useState } from "react";
import Header from "./components/1-Header/Header";
import Hero from "./components/2-HeroSection/Hero";
import MainContent from "./components/4-MainContent/MainContent";
import Contact from "./components/5-ContactUs/Contact";
import Footer from "./components/6-Footer/Footer";
import Skills from "./components/3-Skills/Skills";

const App = () => {
  const [scroll , setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll" , () => setScroll(window.scrollY));
  })
  return (
    <div className="container" id="container">
      <Header />
      <Hero />
      <div className="separator"></div>
      <MainContent />
      <div className="separator"></div>
      <Skills/>
      <div className="separator"></div>
      <Contact />
      <div className="separator"></div>
      <Footer />

      <a href="#container" 
      className={`scrollUp icon-chevrons-up`} 
      style={{opacity: `${scroll > 50 ? 1 : 0}`}}> 

      </a>
    </div>
  );
};

export default App;
