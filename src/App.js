import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import Checkout from "./pages/checkout";
import Login from "./pages/login";
import SignupPatient from "./pages/signupPatient";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup-patient" element={<SignupPatient/>}/>
          <Route path="/signup-patient" element={<SignupPatient/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
