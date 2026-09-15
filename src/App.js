import './App.css';
import Home from './Component/01_Home';
import Productlist from './Component/02_Product';
import Categories from './Component/03_Categories';
import Wishlist from './Component/04_Wishlist';
import Cart from './Component/05_Cart';
import Account from './Component/06_Account';
import Navbar from './Component/07_Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [value, setvalue] = useState(null);
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar setvalue={setvalue}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/product_list' element={<Productlist value={value}/>} />

          <Route path='/wish_list' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
      {/* <Categories/> */}
    </div >
  );
}

export default App;
