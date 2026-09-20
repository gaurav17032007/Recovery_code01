import '../Css_files/01_Home.css';
import getproduct from '../Product_Api/Product_api';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
function Home() {
    const [product, setprodeuct] = useState(null);
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
    return (
        <div>
            <h1>Home page</h1>
            {product?.slice(10, 14).map((item) => (
                <img src={item.images?.[0]} alt="" />
            ))}


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