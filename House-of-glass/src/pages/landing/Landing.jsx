import "./Landing.css";
import React, { useState } from "react";
import Banner from "components/Banner/Banner";
import Categories from "components/Categories/Categories";
import Highlights from "components/Highlights/Highlights";
import { useAxios } from "Utils/useAxios";

export default function Landing() {
  return (
    <div className="container landing-container container-column">
      <Banner />
      <Categories />
      <Highlights />
    </div>
  );
}
