import '../Css_files/01_Home.css';
import getproduct from '../Product_Api/Product_api';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import img from '../images/Shoess.png';
import img1 from '../images/Shut.png';
import img2 from '../images/Makeup_essetials.png';
import img3 from '../images/Earing.png';
import img4 from '../images/Men_shirt.png';
import img5 from '../images/Girl_cloth.png';
import img6 from '../images/Men1_shirt.png';
import img7 from '../images/Men2_shirt.png';
import img8 from '../images/Headphone.png';
import img9 from '../images/Watch.png';
import img10 from '../images/Monitor.png';
import img11 from '../images/Boat.png';
import logo from '../images/logo.png';
import logo1 from '../images/logo.svg';
function Home() {
    const [product, setprodeuct] = useState(null);
    const [Index, setIndex] = useState(0);
    const [SingleProduct, SetSingalProduct] = useState([]);

    const navigator = useNavigate();
    useEffect(() => {
        const call = async function () {
            const value = await getproduct();
            setprodeuct(value);
        }
        call();
    }, []);
    function handler(e) {
        e.preventDefault();
        console.log("Image thubnail run");
        navigator('/Product_item');
    }

    const images_list = [
        img, img1, img2, img3,
        img4, img5, img6, img7,
        img8, img9, img10, img11,
    ]
    function left(e) {
        e.preventDefault();
        let newIndex = Index - 1;
        if (newIndex < 0) {
            newIndex = images_list.length - 1;
        }
        setIndex(newIndex);
    }

    function right(e) {
        e.preventDefault();
        let newIndex = Index + 1;
        if (newIndex >= images_list.length) {
            newIndex = 0;
        }
        setIndex(newIndex);
    }
    useEffect(() => {
        try {
            let result = [];
            for (let i = 0; i < product?.length; i += 4) {
                result.push(product.slice(i, i + 4));
            }
            SetSingalProduct(result);
        } catch (err) {
            console.error(err);

        }

    }, [product]);
    return (
        <div className='product_img'>
            <div className='Slider_img'>
                <button className="left" onClick={left}>{"<"}</button>
                <img src={images_list[Index]} width="200" alt="img1_product" />
                <img src={images_list[(Index + 1) % images_list.length]} width="200" alt="img2_product" />
                <img src={images_list[(Index + 2) % images_list.length]} width="200" alt="img3_product" />
                <img src={images_list[(Index + 3) % images_list.length]} width="200" alt="img3_product" />
                <img src={images_list[(Index + 4) % images_list.length]} width="200" alt="img3_product" />
                <button className="right" onClick={right}>{">"}</button>
            </div>

            {SingleProduct?.slice(0, 4).map((group, i) => (
                <div className="container" key={i}>
                    {group?.map((item) => (
                        <div className="single_box" key={i}>
                            <img
                                src={item.thumbnail}
                                alt=""
                                onClick={handler}
                                />
                                <p>{item.title}</p>
                            <div className='value'>
                                <h3>${item.price}</h3>
                                <h4>Up to {Math.floor(item.discountPercentage)}% discount</h4>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <div className='footer'>
                <div className='first_heading'>
                    <div className='logo_class'>
                        <img src={logo} alt="" />
                        <span className='Shop1'>Shop<span className='Ease1'>Ease</span></span>
                    </div>
                    <p>We are a demo e-commerce platform created to provide a simple and user-friendly online shopping experience.
                        This website is a frontend project built using React, JavaScript, HTML and CSS.</p>
                </div>
                <div className='main_box'>

                    <div className='second_heading'>
                        <span>Quick Links</span>
                        <a href="#">{`> Home`}</a>
                        <a href="#">{`> Products`}</a>
                        <a href="#">{`> Categories`}</a>
                        <a href="#">{`> Offer`}</a>
                    </div>
                    <div className='third_heading'>
                        <span>Customer Support</span>
                        <a href="#">{`> Customer us`}</a>
                        <a href="#">{`> FAQ`}</a>
                        <a href="#">{`> Shipping & Delivery`}</a>
                        <a href="#">{`> Return & Refunds`}</a>
                    </div>
                    <div className='fourth_heading'>
                        <span>Information</span>
                        <a href="#">{`> About us`}</a>
                        <a href="#">{`> Privacy Policy`}</a>
                        <a href="#">{`> Term & Conditions`}</a>
                    </div>
                    <div className='five_heading'>
                        <span>Developer</span>
                        <a href="#">GitHub</a>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className='last_footer'>
                <p>2026 Your Store. All rights reserved.</p>
                <div className='built_react'>
                    <span>Built with React</span>
                    <img src={logo1} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Home;