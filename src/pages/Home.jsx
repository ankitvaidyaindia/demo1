 
import React from 'react'
import Announcement from '../Componenets/Announcement'
import Categories from '../Componenets/Categories'
import Footer from '../Componenets/Footer'
import Navbar from '../Componenets/Navbar'
import Newsletter from '../Componenets/NewsLetter'
import Products from '../Componenets/Products'
import Slider from '../Componenets/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/> 
        <Navbar/>
        <Slider/>
        <Categories/> 
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home 