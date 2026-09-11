import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './01_Home';
import Productlist from './02_Product';
import Categories from './03_Categories';
import Wishlist from './04_Wishlist';
import Cart from './05_Cart';
import Account from './06_Account';
function Navbar() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <Link to='/Home'>Home</Link>
                    <Link to='/product_list'>Product</Link>
                    <Link to='/categories'>Categories</Link>
                    
                    <Link to='/wish_list'>Wishlist</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/account'>Account</Link>
                </nav>


                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/product_list' element={<Productlist />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/wish_list' element={<Wishlist />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/account' element={<Account />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default Navbar;