import '../Css_files/01_Home.css'; 
import getproduct from '../Product_Api/Product_api';
import { useEffect,useState } from "react";
function Home() {
    const [product,setprodeuct]=useState(null);
    useEffect(()=>{
        const call=async function () {
            const value=await getproduct();
            setprodeuct(value);
        }
        call();
    },[]);
    return (
        <div>
            <h1>Home page</h1>
            {product?.map((index) => {
                    return (
                        <div key={index.id}>
                            <p>{index.id}</p>
                            <p>{index.category}</p>
                            {/* {<img src={index.images[0]} alt="" />}
                            {<img src={index.thumbnail} alt="" />} */}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Home;