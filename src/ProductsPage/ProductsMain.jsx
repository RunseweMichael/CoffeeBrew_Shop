import React from 'react'
import Navbar from './Navbar'
import ProductsText from './ProductsText'
import Footer from './Footer'


export default function ProductsMain() {
  return (
    <div className='productsContainer'>
      <Navbar />
      <ProductsText />
      <Footer />
    </div>
  )
}
