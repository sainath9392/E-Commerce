import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Product from "./pages/Product";
import Header from "./components/Header";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <main className="over-flow-hidden text-[#404040]">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </main>
  );
};

export default App;
