import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import DoctorSamples from "./pages/DoctorSamples";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/doctor-samples" element={<DoctorSamples />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route
          path="*"
          element={
            <main className="inner-page empty-state">
              <h1>Page not found</h1>
              <Link to="/" className="button button-dark">
                Back home
              </Link>
            </main>
          }
        />
      </Routes>
    </>
  );
}