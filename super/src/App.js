import React from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Products from './Products.js';
import Cart from './Cart.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
