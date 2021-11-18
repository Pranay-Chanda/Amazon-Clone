import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/619QIdx19yL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={Math.floor(Math.random() * 100)}
            title="Spline 120 Inch Projector Screen 4K HD"
            price={2399}
            image="https://m.media-amazon.com/images/I/71jRf-fenpL._AC_SY175_.jpg"
            rating={5}
            review={1061}
          />
          <Product
            id={Math.floor(Math.random() * 100)}
            title="DesiDiya® 12 Stars LED Diwali Lights Curtain String"
            price={599}
            image="https://images-eu.ssl-images-amazon.com/images/I/515jA106Y7L._AC_UL160_SR160,160_.jpg"
            rating={4}
            review={250}
          />
        </div>
        <div className="home__row">
          <Product
            id={Math.floor(Math.random() * 100)}
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)"
            price={3999}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
            review={2400}
          />
          <Product
            id={Math.floor(Math.random() * 100)}
            title="Nokia G20 Smartphone, Dual SIM 4G, 4GB RAM/64GB Storage, 48MP Quad Camera"
            price={12490}
            image="https://m.media-amazon.com/images/I/61OiHUy-bfS._SL1500_.jpg"
            rating={4}
            review={1340}
          />
          <Product
            id={Math.floor(Math.random() * 100)}
            title="GM 3041 Trio 2 Pin Flex Box 5 Mtr."
            price={288}
            image="https://images-eu.ssl-images-amazon.com/images/I/61Z8DXbt6AL._AC_UL160_SR160,160_.jpg"
            rating={3}
            review={23}
          />
        </div>
        <div className="home__row">
          <Product
            id={Math.floor(Math.random() * 100)}
            title="LG 68.58 cm (27 inch) 4K-UHD (3840 x 2160) HDR 10 Monitor (Gaming & Design)"
            price={30070}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/CEPC/Monitors/revamp/pc/4k_slide_GW_MobileHero_1242x550_v1._CB425523327_.png"
            rating={4}
            review={650}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
