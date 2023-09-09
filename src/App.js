import React from "react";
import { Route } from 'react-router-dom';
// import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Comment from "./pages/Comment.jsx";
import Analystic from "./pages/Analystic.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import { BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/analystic" element={<Analystic />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
