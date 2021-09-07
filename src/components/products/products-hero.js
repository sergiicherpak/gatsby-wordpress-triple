import React from "react";

import LaptopBreakout from "./laptop-breakout";
import DownArrow from "../down-arrow";

export default function ProductsHero() {
  return (
    <>
      <div className="hero not-homepage products-hero products-page">
        <div className="copy mt3">
          <h1>Products</h1>
          <p className="yellow mt3">
            TripleLift has built a portfolio of modern ad products. From our
            roots in Native programmatic ads, we have expanded into Display,
            Branded Content, Video and Television.
          </p>
          <p>We have products to fit almost any objective.</p>
        </div>
        <LaptopBreakout />
      </div>

      <DownArrow />
    </>
  );
}
