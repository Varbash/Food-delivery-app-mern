import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
     <div><Carousel/></div>
     <div className="m-3">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
