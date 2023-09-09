import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/"element={<Dashboard/}/>
  </Routes>
  </BrowserRouter>;
}
