import '../Css_files/01_Home.css';
import getproduct from '../Product_Api/Product_api';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
function Home() {
    const [product, setprodeuct] = useState(null);
    const [Index, setIndex] = useState(0);
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

    const images_slice = product?.slice(10, 15) || [];
    const images_list = images_slice.map((item) => item.images[0]);
    const images_list1= images_list.map((item)=> [item.images,item.images,item.images])
    function left(e) {
        e.preventDefault();
        let newIndex = Index - 1;
        if (newIndex < 0) {
            newIndex = images_list1.length - 1;
        }
        setIndex(newIndex);
    }

    function right(e) {
        e.preventDefault();
        let newIndex = Index + 1;
        if (newIndex >= images_list1.length) {
            newIndex = 0;
        }
        setIndex(newIndex);
    }
    return (
        <div>
            <div className=''>
                <button onClick={left}>{"<"}</button>
                <img src={images_list1[Index]} width="200" alt="product" />
                <button onClick={right}>{">"}</button>
            </div>
            {product?.slice(10, 14).map((item) => {
                <img src={item.images?.[0]} alt="" />
            })
            }


            {/* {product?.filter((index) =>
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