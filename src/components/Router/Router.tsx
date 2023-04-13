import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../HomeArea/Home/Home';
import About from '../AboutArea/About/About';
import React, { FC } from 'react';
import styles from './Router.module.scss';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductsArea from '../ProductsArea/ProductsArea';
import ProductDetails from '../ProductsArea/ProductDetails/ProductDetails';
import AddProduct from '../ProductsArea/AddProduct/AddProduct';
import Register from '../AuthArea/Register/Register';
import Login from '../AuthArea/Login/Login';

interface RouterProps { }
//jwt is a JSON web token
// npm i jwt-decode

const Router: FC<RouterProps> = () => (
    <Routes>
        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* register */}
        <Route path="/register" element={<Register />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Products */}
        <Route path="/products" element={<ProductsArea />} />

        {/* Product page */}
        <Route path="/products/:prodId" element={<ProductDetails />} />

        {/* Add Product */}
        {/* <Route path="/products/new" element={<AddProduct />} /> */}


        {/* About */}
        <Route path="/about" element={<About />} />


        {/*  Default route*/}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Page not Found */}
        <Route path="*" element={<PageNotFound />} />

    </Routes>
);

export default Router;

