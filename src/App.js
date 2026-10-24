import './App.css';
import Home from './Component/01_Home';
import Productlist from './Component/02_Product';
import Men from './Component/Categories/01_Men.jsx';
import Women from './Component/Categories/02_Women.jsx';
import Wishlist from './Component/04_Wishlist';
import Cart from './Component/05_Cart';
import Navbar from './Component/07_Navbar';
import Productitem from './Component/Product_item';
import Electronic from './Component/Header_component/01_Electronic.jsx';
import Fasion from './Component/Header_component/02_Fashion.jsx';
import Shoes from './Component/Header_component/03_Shoes.jsx';
import Bags from './Component/Header_component/04_Bags.jsx';
import Beauty from './Component/Header_component/05_Beauty.jsx';
import HomeKitchen from './Component/Header_component/06_Home&Kitchen.jsx';
import Automotive from './Component/Header_component/07_Automotive.jsx';
import BuyItem from './Component/./BuyItem_page.jsx';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
export const UserProvider = createContext();
function App() {
  const [value, setvalue] = useState(null);
  const [ProductItem, SetProductItem] = useState(null);
  const [send, recive] = useState([]);
  const [Buy, SetBuyItem] = useState([]);
  const [ShowAccount, SetShowAccount] = useState(false);
  const [ShowLogin, SetShowLogin] = useState(false);
  const [WishList_item, SetWishlist_item] = useState([]);
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar
          setvalue={setvalue}
          ShowAccount={ShowAccount}
          SetShowAccount={SetShowAccount}
          ShowLogin={ShowLogin}
          SetShowLogin={SetShowLogin} />
        <UserProvider.Provider value={{ SetProductItem }}>
          <Routes>
            <Route path='/' element={
              <Home
                SetProductItem={SetProductItem} />
            } />
            <Route path='/Men_items' element={<Men />} />
            <Route path='/Women_items' element={<Women />} />
            <Route path='/product_list' element={
              <Productlist
                value={value}
                SetBuyItem={SetBuyItem}
                recive={recive}
                send={send} />

            } />
            <Route path='/wish_list' element={
              <Wishlist
                WishList_item={WishList_item}
                SetProductItem={SetProductItem} />
            } />
            <Route path='/cart' element={
              <Cart
                send={send}
                SetBuyItem={SetBuyItem}
                recive={recive}
              />
            } />
            <Route path='/Product_item' element={
              <Productitem
                ProductItem={ProductItem}
                recive={recive}
                send={send}
                SetBuyItem={SetBuyItem}
                SetWishlist_item={SetWishlist_item}
                WishList_item={WishList_item}
              />
            } />
            <Route path='/Electronic' element={<Electronic />} />
            <Route path='/Fashion' element={<Fasion />} />
            <Route path='/Shoes' element={<Shoes />} />
            <Route path='/Bags' element={<Bags />} />
            <Route path='/Beauty' element={<Beauty />} />
            <Route path='/HomeKitchen' element={<HomeKitchen />} />
            <Route path='/Automotive' element={<Automotive />} />
            <Route path='/BuyItem' element={<BuyItem
              Buy={Buy}
              SetBuyItem={SetBuyItem}
              SetShowAccount={SetShowAccount}
              SetShowLogin={SetShowLogin} />
            } />
          </Routes>
        </UserProvider.Provider>
      </BrowserRouter>
      {/* <Categories/> */}
    </div >
  );
}

export default App;
