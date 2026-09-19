// import { data } from 'react-router-dom';
import '../Css_files/02_Product.css';
import { useEffect, useState } from 'react';
function Product_list({ value }) {
    const [set, setdata] = useState([]);
    // const [data,setdata1]=useState(null);
    console.log("done");
    useEffect(() => {
        const asy = async function () {
            if (!value) {
                return;
            }
            const respones = await fetch(`https://dummyjson.com/products/search?q=${value}`);
            const result = await respones.json();
            console.log(result.products);
            setdata(result.products);
            // setdata1(value);
            // setvalue(result.products);
        }
        asy();
    }, [value]);

    return (
        <div>
            <h1>Product page</h1>
            {set &&
                <div>
                    {set?.map((index) => {
                        return (
                            <div key={index}>
                                <p>{index.id}</p>
                                <p>{index.category}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}
export default Product_list;    