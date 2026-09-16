import '../Css_files/07_Navbar.css';
import { Link } from "react-router-dom"
import image1 from '../images/logo.png';
import image2 from '../images/Home.png';
import image3 from '../images/Cart.png';
import image4 from '../images/Wishlist.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wish_list from './04_Wishlist';
// import Account_img from '../images/Account.png';
function Navbar({ setvalue }) {
    const [val, setval] = useState("");
    const navigate = useNavigate();
    function handler(e) {
        e.preventDefault();
        setvalue(val);
        console.log("run");
        navigate("/product_list");
    }
    // useEffect(()=>{
    // },setvalue);
    return (
        <div className='Nav_div'>
            <nav className='Nav_link'>
                <div className='img_span'>
                    <img src={image1} alt="ShopEase logo" />
                    <span className='Shop'>Shop<span className='Ease'>Ease</span></span>
                </div>

                <div className='Home_plus'>

                    <div className='Home_img'>
                        <Link to='/'>
                            <img src={image2} alt="Home logo" />Home
                        </Link>
                    </div>

                    <Link to='/categories'>Categories</Link>
                </div>

                <div className='Nav_input'>

                    <input type="text"
                        placeholder='🔍 Search for products, brands and more...'
                        value={val}
                        onChange={(e) => setval(e.target.value)}
                    />
                    <button onSubmit={handler}>Search</button>
                </div>

                <div className='Wishlist_plus'>

                    <Link to='/wish_list'>
                        <img src={image4} alt="" />
                        Wishlist
                    </Link>

                    <div className='Cart_img'>

                        <Link to='/cart'>
                            <img src={image3} alt="" />Cart
                        </Link>

                    </div>

                    <Link to='/account'>Account</Link>
                </div>
                {/* <img src={Account_img} alt="" /> */}
            </nav>
        </div >
    )
}
export default Navbar;