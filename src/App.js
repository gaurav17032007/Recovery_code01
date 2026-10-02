import './App.css';
import Home from './Component/01_Home';
import Productlist from './Component/02_Product';
import Men from './Component/Categories/01_Men.jsx';
import Women from './Component/Categories/02_Women.jsx';
import Wishlist from './Component/04_Wishlist';
import Cart from './Component/05_Cart';
import Account from './Component/06_Account';
import Navbar from './Component/07_Navbar';
import Product_item from './Component/Product_item';
import Electronic from './Component/Header_component/01_Electronic.jsx';
import Fasion from './Component/Header_component/02_Fashion.jsx';
import Shoes from './Component/Header_component/03_Shoes.jsx';
import Bags from './Component/Header_component/04_Bags.jsx';
import Beauty from './Component/Header_component/05_Beauty.jsx';
import HomeKitchen from './Component/Header_component/06_Home&Kitchen.jsx';
import Automotive from './Component/Header_component/07_Automotive.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [value, setvalue] = useState(null);
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar setvalue={setvalue}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Men_items' element={<Men />} />
          <Route path='/Women_items' element={<Women />} />
          <Route path='/product_list' element={<Productlist value={value}/>} />
          <Route path='/wish_list' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/Product_item' element={<Product_item/>} />
          <Route path='/Electronic' element={<Electronic/>} />
          <Route path='/Fashion' element={<Fasion/>} />
          <Route path='/Shoes' element={<Shoes/>} />
          <Route path='/Bags' element={<Bags/>} />
          <Route path='/Beauty' element={<Beauty/>} />
          <Route path='/HomeKitchen' element={<HomeKitchen/>} />
          <Route path='/Automotive' element={<Automotive/>} />
        </Routes>
      </BrowserRouter>
      {/* <Categories/> */}
    </div >
  );
}

export default App;
