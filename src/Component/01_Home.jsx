import '../Css_files/01_Home.css';
import getproduct from '../Product_Api/Product_api';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import img1 from '../images/Bags.jpg';
import img2 from '../images/Earing.jpg';
import img3 from '../images/Shoe.jpg';
import img4 from '../images/T-shirts.jpg';
import img5 from '../images/Washing_machine.jpg';
import img6 from '../images/Watch.jpg';

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
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
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
    return (
        <div>
            <div className=''>
                <button onClick={left}>left</button>
                <img src={images_list[Index]} width="200" alt="img1_product" />
                <img src={images_list[(Index+1)%images_list.length]} width="200" alt="img2_product" />
                <button onClick={right}>right</button>
            </div>
            {product?.slice(10, 14).map((item) => {
                <img src={item.images?.[0]} alt="" />
            })
            }

            {/* 
            {product?.filter((index) =>
                index.tags[0] !== "meat"
                && index.tags[0] !== "seafood")
                .map((index) =>
                    <div key={index.id}>
                        <p>{index.id}</p>
                        <p>{index.category}</p>
                        <img src={index.thumbnail} alt="" onClick={handler} />
                    </div>
                )} */}

        </div>
    )
}
export default Home;