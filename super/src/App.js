import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Products from './Products.js';
import ProductDetails from './ProductDetails.js';
import ProductDetailInfo from './ProductDetailInfo.js';
import ProductDetailNutrition from './ProductDetailNutrition.js';
import ProductDetailStorage from './ProductDetailStorage.js';
import Cart from './Cart.js';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/products/:id" element={<ProductDetails />}>
                        <Route path="" element={<ProductDetailInfo />}></Route>

                        <Route path="nutrition" element={<ProductDetailNutrition />}></Route>

                        <Route path="storage" element={<ProductDetailStorage />}></Route>
                    </Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
