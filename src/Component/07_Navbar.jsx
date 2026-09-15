import '../Css_files/07_Navbar.css';
import { Link } from "react-router-dom"
import image from '../images/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                    <img src={image} alt="" />
                    <span>Shop<span className='Ease'>Ease</span></span>
                </div>
                <div className='Home_plus'>
                    <Link to='/'>Home</Link>
                    <Link to='/categories'>Categories</Link>
                </div>

                <div className='Nav_input'>
                    <form onSubmit={handler}>
                        <input type="text"
                            placeholder='select the product'
                            value={val}
                            onChange={(e) => setval(e.target.value)}
                        />
                        <button type='submit'>Search</button>
                    </form>
                </div>

                <div className='Wishlist_plus'>
                    <Link to='/wish_list'>Wishlist</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/account'>Account</Link>
                </div>
                {/* <img src={Account_img} alt="" /> */}
        </nav>
        </div >
    )
}
export default Navbar;