import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/category/:catId' element={<Category />} />
            <Route path='/product/:prodId' element={<Product />} />
            <Route path='/product/add' element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
