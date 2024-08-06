import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Footer from './components/Footer';

import womenImage1 from './assets/images/women1.png';
import womenImage2 from './assets/images/women2.png';
import menImage1 from './assets/images/men1.png';
import menImage2 from './assets/images/men2.png';
import kidsImage1 from './assets/images/kids1.png';
import kidsImage2 from './assets/images/kids2.png';


const womenBanner = [womenImage1, womenImage2];
const menBanner = [menImage1, menImage2];
const kidsBanner = [kidsImage1, kidsImage2];

export default function App() {
  return (
    <main className="bg-gray text-black">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Category category="Men" banner={menBanner} />} />
          <Route path="/women" element={<Category category="Women" banner={womenBanner} />} />
          <Route path="/kids" element={<Category category="Kids" banner={kidsBanner} />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
