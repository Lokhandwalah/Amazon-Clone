import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://i.gadgets360cdn.com/large/amazon-best-movies-feb-2020_1589535715687.jpg"
        alt=""/>
      {/* Products */}
      <div className="home_row">
        <Product
          id="12345612"
          title="Full-Stack React Projects: Learn MERN stack development by building modern web apps using MongoDB, Express, React, and Node.js, 2nd Edition"
          price={2999}
          rating={5}
          image="https://m.media-amazon.com/images/I/5119ihlJx5L.jpg"
        />
        <Product
          id="85436528"
          title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller(Adapter Not Included)"
          price={1599}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SY450_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="95175385"
          title="Champion Men's MIDDLEWEIGHT Hoodie"
          price={799}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71zU29X1JiL._AC_SY500._SX._UX._SY._UY_.jpg"
        />
        <Product
          id="78621453"
          title="AstroAI Reusable Dust Face Mask with Filters - Personal Protective Adjustable for Running, Cycling, Outdoor Activities"
          price={699}
          rating={5}
          image="https://m.media-amazon.com/images/I/71gkgTns3FL._AC_UL320_.jpg"
        />
        <Product
          id="35741258"
          title="Wrangler Authentics Men's Classic 5-Pocket Regular Fit Flex Jean"
          price={2499}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51d08pivHFL._AC_UX569_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="954"
          title="SAMSUNG QN32Q50RAFXZA Flat 32 inch QLED 4K 32Q50 Series Smart TV"
          price={68999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
