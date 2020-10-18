import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-material-ui-carousel";

export default function Home() {
  var items = [
    {
      src:
        "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter-20/PEA-LIVE/grid-4/1264659_FO_JP_GW_1500x600._CB403633308_.jpg",
    },
    {
      src:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Xiaomi/Redmi_note9Series/Pro_Series/2nd_updated/V260022676_Jupiter2020_Phase1_Redmi_Note9series_DesktopHero_1500x600-copy._CB419148805_.jpg",
    },
    {
      src:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/WAVE1-GW/2_Desktop-Hero_Rec_1500x600._CB419165735_.jpg",
    },
  ];
  function Item(props) {
    return <img className="home__image" src={props.item.src} />;
  }
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          indicators={false}
          navButtonsAlwaysVisible={true}
          className="home__carousel"
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>

        <div className="home__row">
          {/* product */}
          <Product
            id="12w2321323"
            title="Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)"
            image="https://images-na.ssl-images-amazon.com/images/I/61Z4fxBfkVL._SL1000_.jpg"
            price="3,492.00"
            rating={5}
          />
          <Product
            id="2222"
            title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
            image="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg"
            price="37,999.00"
            rating={4}
          />

          {/* product */}
        </div>

        <div className="home__row">
          <Product
            id="2222"
            title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black"
            image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
            price="₹ 67,990.00"
            rating={3}
          />
          <Product
            id="2222"
            title="Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market Paperback – Illustrated, 19 February 2018"
            image="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg"
            price="310.00"
            rating={4}
          />
          <Product
            id="2222"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/61XclfIKcbL._SL1000_.jpg"
            price="3,400"
            rating={5}
          />{" "}
        </div>

        <div className="home__row">
          <Product
            id="2222"
            title="Microsoft Xbox One Wireless Controller with Bluetooth (With 3.5 mm Jack) (White)"
            image="https://images-na.ssl-images-amazon.com/images/I/61cIz9OsQOL._SL1500_.jpg"
            price="5,999.00"
            rating={4}
          />{" "}
        </div>
      </div>
    </div>
  );
}
