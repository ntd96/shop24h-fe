import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePages from './pages/HomePages';
import ProductsPages from './pages/ProductsPages';
import { useState, useEffect } from "react"
import { auth } from './Firebase';
import ProductInfoPages from './pages/ProductsInfoPages';
import CartPages from './pages/CartPages';
import useWindowDimensions from './windowDimension/Window'


function App() {
  // Chỉnh responsive cho mobile
  const { height, width } = useWindowDimensions()

  const [user, setUser] = useState(null); // Tạo hook state quản lí User
  // Giữ thông tin người dùng, Authenitaion
  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      console.log(result);
      setUser(result)
    })
  }, [])

  return (
    <div >
      {/* Bộ định tuyến đường đi */}
      <Routes>
        <Route exact path='/' element={<HomePages user={user} setUser={setUser}  width={width} />} ></Route>
        <Route exact path='/products' element={<ProductsPages user={user} setUser={setUser} width={width} />} ></Route>
        <Route exact path='/products/:productId' element={<ProductInfoPages user={user} setUser={setUser} />} ></Route>
        <Route exact path='/cart' element={<CartPages user={user} setUser={setUser} /> } ></Route>
        <Route exact path='/login' element={<Login />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
