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

function Home() {
    const [product, setprodeuct] = useState(null);
    const [Index, setIndex] = useState(0);
    // const [Index1, setIndex1] = useState(1);
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
    let result = [];
    for (let i = 0; i < product?.length; i += 3) {
        result.push(product.slice(i, i + 3));
    }
    console.log(result);
    // useEffect(() => {
    // });
    return (
        <div>
            <div className='Slider_img'>
                <button className="left" onClick={left}>{"<"}</button>
                <img src={images_list[Index]} width="200" alt="img1_product" />
                <img src={images_list[(Index + 1) % images_list.length]} width="200" alt="img2_product" />
                <img src={images_list[(Index + 2) % images_list.length]} width="200" alt="img3_product" />
                <img src={images_list[(Index + 3) % images_list.length]} width="200" alt="img3_product" />
                <img src={images_list[(Index + 4) % images_list.length]} width="200" alt="img3_product" />
                <button className="right" onClick={right}>{">"}</button>
            </div>
            {/* {product?.slice(10, 14).map((item) => {
                <img src={item.images?.[0]} alt="" />
            })
            } */}


            {result?.slice(0, 5).map((group, i) => (
                <div className="box" key={i}>
                    {group.map((item) => (
                        <img
                            key={item.id}
                            src={item.thumbnail}
                            alt=""
                            onClick={handler}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Home;