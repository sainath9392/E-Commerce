import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import Navbar from "./Navbar";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const { token, getCartcount } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <header className="max-padd-container w-full z-50">
      <div className="flexBetween py-3">
        {/* logo Left side */}

        <Link to={"/"} className="flex flex-1 xs:pr-5">
          <div className="bold-32 ">
            Outfir<span className="text-secondary">o</span>
          </div>
        </Link>

        {/* Navbar */}
        <div className="flex-1 ">
          <Navbar
            containerStyles={`${
              menuOpened
                ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
                : "hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1  "
            }`}
          />
        </div>

        {/* Button on Right Side */}
        <div className="flex-1 flex items-center justify-end gap-x-2 xs:gap-x-4 max-xs:ml-7 max-sm:ml-5">
          <FaBarsStaggered
            onClick={toggleMenu}
            className="xl:hidden cursor-pointer text-xl "
          />
          <FaSearch className="text-lg cursor-pointer" />
          <Link to={"/cart"} className="flex relative">
            <TbBasket className="text-[27px]" />
            <span className="bg-secondary text-white text-[12px] font-semibold left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md">
              {getCartcount()}
            </span>
          </Link>
          <div className="group relative">
            {token ? (
              <div>
                <TbUserCircle className="text-[29px] max-sm:text-[18px] cursor-pointer" />
              </div>
            ) : (
              <button className="btn-light  cursor-pointer flexCenter gap-x-2">
                Login
                <RiUserLine className="text-xl max-sm:text-[18px]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
