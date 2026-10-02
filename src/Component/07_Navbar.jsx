import '../Css_files/07_Navbar.css';
import { Link } from "react-router-dom"
import image1 from '../images/logo.png';
import image2 from '../images/Home.svg';
import image3 from '../images/Cart.png';
import image4 from '../images/Wishlist.png';
import image5 from '../images/Account.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar({ setvalue }) {
    const [val, setval] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const Men_category = useNavigate();
    const Women_category = useNavigate();
    const HomeCategory = useNavigate();
    function handler(e) {
        e.preventDefault();
        setvalue(val);
        navigate("/product_list");
        setval("");
    }

    useEffect(() => {

        if (category === 'Men') {
            Men_category('/Men_items');
        } else if (category === 'Women') {
            Women_category('/Women_items');
        } else {
            HomeCategory('/');
        }
    }, [category]);

    return (
        <div>

            <div className='Nav_div'>
                <nav className='Nav_link'>
                    <div className='img_span'>
                        <img src={image1} alt="ShopEase logo" />
                        <span className='Shop'>Shop<span className='Ease'>Ease</span></span>
                    </div>

                    <div className="nav_links">
                        <Link to="/" className="nav_item"
                            onClick={() => setCategory("")}>
                            <img src={image2} alt="home icon" />
                            <span>Home</span>
                        </Link>

                        <select
                            className='nav_option'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Category</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                        </select>

                    </div>

                    <div className='Nav_input'>
                        {/* <form>
                            
                        </form> */}
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
                <Link to='/Electronic'>
                    <span value="Electronics">📱 Electronics</span>
                </Link>
                <Link to='/Shoes'>
                    <span value="Shoes">👟 Shoes</span>
                </Link>
                <Link to='/Fashion'>
                    <span value="Fashion">👕 Fashion</span>
                </Link>
                <Link to='/Bags'>
                    <span value="Bags">👜 Bags</span>
                </Link>
                <Link to='/Beauty'>
                    <span value="Beauty">💄 Beauty</span>
                </Link>
                <Link to='/HomeKitchen'>
                    <span value="Home & Kitchen">🏠 Home & Kitchen</span>
                </Link>
                <Link to='/Automotive'>
                    <span value="Automotive">🚗 Automotive</span>
                </Link>
            </div>
        </div>
    )
}
export default Navbar;