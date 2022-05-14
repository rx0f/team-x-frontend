import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import Checkout from "./pages/checkout";
import DiabeteForm from "./pages/diabeteform";
import Doctors from "./pages/doctors";
import HeartForm from "./pages/heartform";
import Home from "./pages/home";
import Login from "./pages/login";
import SignupPatient from "./pages/signupPatient";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup-patient" element={<SignupPatient/>}/>
          <Route path="/heartform" element={<HeartForm/>}/>
          <Route path="/diabeteform" element={<DiabeteForm/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
