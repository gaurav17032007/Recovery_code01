import '../Css_files/07_Navbar.css';
import { Link } from "react-router-dom"
import image1 from '../images/logo.png';
import image2 from '../images/Home.svg';
import image3 from '../images/Cart.png';
import image4 from '../images/Wishlist.png';
import image5 from '../images/Account.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar({ setvalue }) {
    const [val, setval] = useState("");
    const navigate = useNavigate();
    const category = useNavigate();
    function handler(e) { 
        e.preventDefault();
        setvalue(val);
        navigate("/product_list");
        setval("");
    }
        const handleCategoryChange = (event) => {
            const selectedValue = event.target.value;

            if (selectedValue === 'Men') {
                Category();
            } else if (selectedValue === 'Women') {
                runWomenFunction();
            }
        };

        const runWomenFunction = () => {
            console.log("Women category selected!");
        };
    function Category(e) {
        // e.preventDefault();
        category('/categories');
    }
    return (
        <div>

            <div className='Nav_div'>
                <nav className='Nav_link'>
                    <div className='img_span'>
                        <img src={image1} alt="ShopEase logo" />
                        <span className='Shop'>Shop<span className='Ease'>Ease</span></span>
                    </div>

                    <div className="nav_links">
                        <Link to="/" className="nav_item">
                            <img src={image2} alt="home icon" />
                            <span>Home</span>
                        </Link>

                        <select className='nav_option' onChange={handleCategoryChange}>
                            <option>Category</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                        </select>

                    </div>

                    <div className='Nav_input'>

                        <input type="text"
                            placeholder='🔍 Search for products, brands and more...'
                            value={val}
                            onChange={(e) => setval(e.target.value)}
                        />
                        <button onClick={handler}>Search</button>
                    </div>

                    <div className='Wishlist_plus'>
                        <div className='Heart'>
                            <img src={image4} type='checkbox' alt="" />
                            <span>Wishlist</span>
                        </div>

                        <div className='Cart_img'>

                            <Link to='/cart'>
                                <img src={image3} alt="" />
                                <span>Cart</span>
                            </Link>

                        </div>

                        <div className='Account'>
                            <Link to='/account'>
                                <img src={image5} alt="" />
                                <span>Account</span>
                            </Link>
                        </div>
                    </div>
                    {/* <img src={Account_img} alt="" /> */}
                </nav>
            </div >
            <div className='Categories'>
                <span>📱 Electronics</span>
                <span>👕 Fashion</span>
                <span>👟 Shoes</span>
                <span>👜 Bags</span>
                <span>💄 Beauty</span>
                <span>🏠 Home & Kitchen</span>
                <span>🚗 Automotive</span>
            </div>
        </div>
    )
}
export default Navbar;