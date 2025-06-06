import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slidebar from "./components/Slidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
export const backen_url = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <main>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="bg-primary text-[#404040]">
          <div className=" max-w-[1440px] flex flex-col sm:flex-row">
            <Slidebar setToken={setToken} />
            <Routes>
              <Route path="/" element={<Add setToken={setToken} />} />
              <Route path="/list" element={<List setToken={setToken} />} />
              <Route path="/orders" element={<Orders setToken={setToken} />} />
            </Routes>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
