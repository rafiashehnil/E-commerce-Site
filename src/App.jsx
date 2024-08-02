import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Footer from './components/Footer';
export default function App() {
  return (
    <main className="bg-gray text-black">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/men" element={<Category />} />
          <Route path="/women" element={<Category />} />
          <Route path="/kids" element={<Category />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  );
}
