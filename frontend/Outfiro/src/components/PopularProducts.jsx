import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Item from "./item";

const PopularProducts = () => {
  const { products } = useContext(ShopContext);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.filter((item) => item.popular);
    setPopularProducts(data.slice(0, 5));
  }, [products]);

  return (
    <section className="max-padd-container bg-primary py-16">
      <Title
        title1={"Popular"}
        title2={"Products"}
        titleStyles={"pd-10"}
        paraStyles={"!block"}
      />
      {/* Container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {popularProducts.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
