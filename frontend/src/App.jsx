import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Content from './pages/Content'
import Product from './pages/Product'
import Card from './pages/Card'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <>
      <div className='px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]'>
        
        <Navbar/>
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Collection' element={<Collection/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contect' element={<Content/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/Card' element={<Card/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/place-order' element={<PlaceOrder/>} />
          <Route path='/Orders' element={<Orders/>} />
        </Routes>
          <Footer/>
      </div>
    </>
  )
}

export default App
