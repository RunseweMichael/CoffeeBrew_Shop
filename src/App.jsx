import './App.css'
import React from 'react'
import LandingMain from './LandingPage/LandingMain'
import HomePageMain from './HomePage/HomePageMain'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './HomePage/Navbar'
import AboutMain from './AboutUs/AboutMain'
import HowMain from './HowItWorksPage/HowMain'
import ReviewMain from './ReviewsPage/ReviewMain'
import ProductsMain from './ProductsPage/ProductsMain'
import LocationMain from './Location/LocationMain'
import 'leaflet/dist/leaflet.css';
import ContactMain from './ContactUS/ContactMain'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/homepage" element={<HomePageMain />}/>
        <Route path="/navbar" element={<Navbar />}/>
        <Route path="/about" element={<AboutMain />} />
        <Route path="/how" element={<HowMain />} />
        <Route path="/review" element={<ReviewMain />} />
        <Route path='/products' element={<ProductsMain />} />
        <Route path='/location' element={<LocationMain />} />
        <Route path='/contact' element={<ContactMain />} />
      </Routes>
    </BrowserRouter>
  )
}
