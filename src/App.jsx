import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Membership />
      <Trainers />
      <Contact />
    </>
  );
}

export default App;