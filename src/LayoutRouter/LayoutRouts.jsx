import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Components/Pages/Home/Home';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Plans from '../Components/Pages/Plans/Plans';
import Cources from '../Components/Pages/Cources/Cources';
import About from '../Components/Pages/AboutUs/About';
import Contact from '../Components/Pages/Contactes/Contact';
import Support from '../Components/Pages/Support/Support';

function LayoutRouts() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Plans />} />
                <Route path='/cources' element={<Cources />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contact />} />
                <Route path='/support' element={<Support />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default LayoutRouts