import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Posts from './pages/blog/post'
import Home from './pages/home'
import Add from './pages/ecommerce/product/Add'
import AddCategory from './pages/ecommerce/category/AddCategory'

function App() {
  return (<>

    <ul style={{display:'flex', justifyContent:'center'}}>
      <li style={{listStyle:'none', margin:'10px'}}><Link to="/">Home</Link></li>
      <li style={{listStyle:'none', margin:'10px'}}><Link to="/posts">Posts</Link></li>
      <li style={{listStyle:'none', margin:'10px'}}><Link to="/product/add">Add Product</Link></li>
      <li style={{listStyle:'none', margin:'10px'}}><Link to="/category/add">Add Category</Link></li>
      
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path='/product/add' element={<Add />} />
      <Route path='/category/add' element={<AddCategory />} />
    </Routes>
  </>
  )
}

export default App