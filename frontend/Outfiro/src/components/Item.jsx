import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Item = ({ product }) => {
  const {currency} = useContext(ShopContext)
  return (
    <div className="relative bottom-12">
      <Link to={`/product/${product._id}`} className="flexCenter relative top-12 overflow-hidden m-2.5 ">
        <img src={product.image[0]} alt="item" className="h-50 sm:max-w-70 rounded-lg sm:max-h-70 object-contain" />
      </Link>
      <div className="p-3 rounded-lg pt-12 bg-white shadows">
        <h4 className="bold-15 line-clamp-1 !my-0 ">{product.name}</h4>
        <div className="flexBetween pt-1">
          <h5 className="h5 pr-2">{currency}{product.price}.00</h5>
          <div className="flex items-baseline gap-x-1">
            <FaStar className="text-secondary" />
            <h5 className="h5 relative bottom-0">4.8</h5>
          </div>
        </div>
        <p className="line-clamp-2 py-1 ">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;
