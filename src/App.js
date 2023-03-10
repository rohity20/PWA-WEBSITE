import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Routes basename="/PWA-WEBSITE">
   
        {/* <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} /> */}
         <Route path='/PWA-WEBSITE' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />

      </Routes>
    </>
  );
}

export default App;
